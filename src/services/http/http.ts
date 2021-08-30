import {
  getStringifiedQuery,
  HttpError,
  HttpHeader,
  HttpMethod,
  HttpOptions
} from 'src/services/common'
import { GetHeadersProps } from './common/types'
import { storage as storageService } from 'src/services'
import { StorageKey } from 'src/common/enums'

type Constructor = {
  storage: typeof storageService
}

class Http {
  #storage: typeof storageService

  constructor({ storage }: Constructor) {
    this.#storage = storage
  }

  async load<T = unknown>(
    url: string,
    options: Partial<HttpOptions> = {}
  ): Promise<T> {
    const {
      method = HttpMethod.GET,
      payload = null,
      contentType,
      hasAuth = true,
      query
    } = options

    const headers = await this.getHeaders({
      contentType,
      hasAuth
    })

    return fetch(this.getUrl(url, query), {
      method,
      headers,
      body: payload
    })
      .then(this.checkStatus)
      .then((res) => this.parseJSON<T>(res))
      .catch(this.throwError)
  }

  private getUrl(url: string, query?: Record<string, string | number>): string {
    return `${url}${query ? `?${getStringifiedQuery(query)}` : ''}`
  }

  private async getHeaders({
    contentType,
    hasAuth
  }: GetHeadersProps): Promise<Headers> {
    const headers = new Headers()

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType)
    }

    if (hasAuth) {
      const token = await this.#storage.getItem(StorageKey.TOKEN)
      headers.append(HttpHeader.AUTHORIZATION, `Bearer ${token}`)
    }

    return headers
  }

  private async checkStatus(response: Response): Promise<Response> {
    if (!response.ok) {
      const parsedException = await response.json().catch(() => ({
        message: response.statusText
      }))

      throw new HttpError({
        status: response.status,
        message: parsedException?.message
      })
    }

    return response
  }

  private parseJSON<T>(response: Response): Promise<T> {
    return response.json()
  }

  private throwError(err: Error): never {
    throw err
  }
}

export { Http }
