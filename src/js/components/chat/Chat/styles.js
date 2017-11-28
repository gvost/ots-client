
import { StyleSheet } from 'react-native'
import CORE from '@styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORE.colors.black
  },

  // the chat bubbles and their contents
  bubble: {},
  messageText: {
    color: CORE.colors.white
  },
  time: {
    color: CORE.colors.white
  },
  screenName: {
    fontSize: 10,
    color: CORE.colors.white,
    textAlign: 'right',
    marginRight: 10,
    marginLeft: 10
  },

  // the date displayed between bubbles
  day: {
    color: CORE.colors.white
  },

  // the input section
  composer: {
    color: CORE.colors.white
  },
  inputToolbarContainer: {
    borderTopColor: CORE.colors.purple
  },
  inputToolbarPrimary: {
    backgroundColor: CORE.colors.black
  },

  // the load-earlier button
  loadEarlier: {
    backgroundColor: CORE.colors.black,
    borderColor: CORE.colors.cyan,
    borderWidth: 2
  }
})