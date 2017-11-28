
import { StyleSheet } from 'react-native'
import CORE from '@styles'

let countCircle = {
  width: 12,
  height: 12,
  borderRadius: 6,
  marginLeft: 4
}

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'flex-start'
  },
  title: {
    color: CORE.colors.white,
    flex: 1,
    fontSize: 16
  },
  meta: {
    flex: 1,
    marginTop: 13,
    flexDirection: 'row',
    width: '100%'
  },
  metaText: {
    color: CORE.colors.white,
    fontSize: 13
  },
  count: {
    width: 35,
    flexDirection: 'row',
    alignItems: 'center'
  },
  redCircle: {
    ...countCircle,
    marginTop: 1,
    backgroundColor: CORE.colors.red,
  },
  blueCircle: {
    ...countCircle,
    backgroundColor: CORE.colors.blue
  },
  dateCreated: {
    flex: 1,
    textAlign: 'right'
  }

})

