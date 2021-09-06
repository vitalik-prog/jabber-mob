import { StackNavigationProp } from '@react-navigation/stack'
import { NavigationScreen } from 'src/common/enums'
import { RootStackParamList } from 'src/common/types'

type UserScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  NavigationScreen.MY_PROFILE
>

export type { UserScreenNavigationProp }
