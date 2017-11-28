
/////////////////// IMPORTS /////////////////////

import React from 'react'
import { connect } from 'react-redux'
import Settings from '../components/settings/Settings'
import { logout } from '@state/auth/actions'

///////////////// CONSTRUCT PROPS //////////////////

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

/////////////////// NAVIGATION ///////////////////

Settings.navigationOptions = props => {
  return {
    title: 'Settings'
  }
}

/////////////////// EXPORTS ////////////////////////

export default connect(mapStateToProps, mapDispatchToProps)(Settings)

