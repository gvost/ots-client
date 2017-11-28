
import { StyleSheet } from 'react-native'
import CORE from '@styles'

const PADDING = 15

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING,
    backgroundColor: CORE.colors.black,
    paddingBottom: 50
  },
  text: {
    color: CORE.colors.white,
    fontFamily: 'Circular-Book',
    width: '100%'
  },
  avatarAndScreenName: {
    width: '100%',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  avatar: {},
  textInput: {
    padding: 5,
    backgroundColor: CORE.colors.black,
    width: 'auto',
    color: CORE.colors.white,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    fontFamily: 'Circular-Book',
    fontSize: 14
  },
  screenNameTextInput: {
    flex: 1,
    paddingLeft: 5,
    fontSize: 30,
    marginLeft: 20,
    marginTop: 8
  },
  tagLineTextInput: {},
  header: {
    marginTop: 30,
    marginBottom: 5,
    fontSize: 18
  },
  tagLine: {},
  bio: {}
})

