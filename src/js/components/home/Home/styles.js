
import { StyleSheet } from 'react-native'
import CORE from '@styles'

const PADDING = 15

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: CORE.colors.black
  },
  avatar: {
    position: 'absolute',
    top: PADDING,
    left: PADDING
  },
  settingsImage: {
    position: 'absolute',
    bottom: PADDING,
    right: PADDING
  }
})

