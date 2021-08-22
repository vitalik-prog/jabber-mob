import { UserPayloadKey } from 'src/common/enums'
import { UserPayload } from './user-payload.type'

type UserConfigurePayload = UserPayload & {
  [UserPayloadKey.FIRST_NAME]: string
  [UserPayloadKey.LAST_NAME]: string
  [UserPayloadKey.NICKNAME]: string
  [UserPayloadKey.BIRTHDATE]: string
}

export type { UserConfigurePayload }
