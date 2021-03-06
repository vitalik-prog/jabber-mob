import { StyleSheet, ViewStyle } from 'react-native'

type Styles = {
  flatList: ViewStyle
  flatListFooter: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  flatList: {
    flexGrow: 1
  },
  flatListFooter: {
    flex: 1,
    paddingBottom: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
