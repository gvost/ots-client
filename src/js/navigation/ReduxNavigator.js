
/*
  This file integrates the AppRouter with redux. It's essentially boilerplate,
  and probably won't be modified on a regular basis.

  https://github.com/react-community/react-navigation/blob/master/examples/ReduxExample/src/navigators/AppNavigator.js
  https://reactnavigation.org/docs/guides/redux
*/

///////////////////////// IMPORTS //////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BackHandler } from 'react-native'
import { addNavigationHelpers, NavigationActions } from 'react-navigation'
import AppRouter from './AppRouter'

/////////////////// REDUX NAV INTEGRATION //////////////////

class ReduxNavigator extends React.Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props
    if (nav.index === 0) {
      return false
    }
    dispatch(NavigationActions.back())
    return true
  }

  render() {
    const { dispatch, nav } = this.props
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav
    })

    return <AppRouter navigation={navigation} />
  }
}

ReduxNavigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(ReduxNavigator)

