
import { StyleSheet } from 'react-native'
import CORE from '@styles'

export default StyleSheet.create({
  container: {
    marginBottom: 50
  },
  itemContainer: {},
  profileContent: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  divider: {
    height: 1,
    backgroundColor: CORE.colors.white,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10
  }
})

