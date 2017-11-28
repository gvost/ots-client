
import { StyleSheet } from 'react-native'
import CORE from '@styles'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10
  },
  count: {
    color: CORE.colors.white,
    fontSize: 18,
    marginLeft: 10
  },
  circle: {
    width: 17,
    height: 17,
    borderRadius: 9,
    marginLeft: 6,
    marginTop: 3
  }
})

