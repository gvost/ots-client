import { StyleSheet } from 'react-native'
import CORE from '@styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORE.colors.black,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    color: CORE.colors.white,
    fontFamily: 'Circular-Book',
    width: 330,
    fontSize: 18,
    marginBottom: 20
  },
  introLogo: {
    top: 100,
    borderWidth: 1,
    width: '100%'
  },
  button: {
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    bottom: 45,
    marginLeft: 30,
    alignSelf: 'flex-start'
  },
  buttonText: {
    color: CORE.colors.purple,
    fontFamily: 'Circular-Bold',
    fontSize: 34
  }
})