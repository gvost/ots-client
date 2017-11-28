
import { StyleSheet } from 'react-native'
import CORE from '@styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORE.colors.black,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    fontSize: 30,
    height: 50,
    backgroundColor: CORE.colors.black,
    margin: 10,
    width: 250,
    color: CORE.colors.cyan,
    borderBottomWidth: 2,
    borderColor: CORE.colors.cyan
  },
  loginButtonContainer: {
    width: 250,
    marginTop: 30,
  },
  loginButton: {
    fontSize: 24,
    color: CORE.colors.cyan,
  },
  errorText: {
    fontSize: 14,
    height: 20,
    backgroundColor: CORE.colors.black,
    margin: 10,
    width: 250,
    color: CORE.colors.cyan,
    borderWidth: 1
  },
  activityIndicator: {
    position: 'absolute',
    top: 36,
    left: 76
  }
})

