import { ContentType, HttpMethod } from 'src/services/common/enums'

type HttpOptions = {
  method: HttpMethod
  contentType: ContentType
  payload: BodyInit | null
  hasAuth: boolean
  query: Record<string, string | number>
}

export type { HttpOptions }