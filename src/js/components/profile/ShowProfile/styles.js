
import { StyleSheet } from 'react-native'
import CORE from '@styles'

const PADDING = 15

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: CORE.colors.black
  },
  text: {
    color: CORE.colors.white,
    fontFamily: 'Circular-Book',
    width: '100%',
    fontSize: 14
  },
  avatarAndScreenName: {
    width: '100%',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  avatar: {},
  screenName: {
    fontSize: 30,
    marginLeft: 20,
    marginTop: 12
  },
  header: {
    marginTop: 30,
    marginBottom: 5,
    fontSize: 18
  },
  tagLine: {},
  bio: {}
})

