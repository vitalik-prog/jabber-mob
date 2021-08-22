import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center'
  },
  hello: {
    fontSize: 36,
    fontWeight: '700'
  },
  intro: {
    fontSize: 18
  },
  lets: {
    fontSize: 18,
    marginBottom: 40
  },
  input: {
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 4,
    marginBottom: 15
  },
  bottomBlock: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 25
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 10
  },
  forgot: {
    fontSize: 13
  },
  link: {
    fontWeight: 'bold'
  }
})

export { styles }
