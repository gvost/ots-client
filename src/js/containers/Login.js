
/////////////////// IMPORTS /////////////////////

import React from 'react'
import { connect } from 'react-redux'
import Login from '../components/login/Login'
import { login, checkAuth } from '@state/auth/actions'

///////////////// CONSTRUCT PROPS //////////////////

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkAuth: () => dispatch(checkAuth()),
    login: (username, password) => dispatch(login(username, password))
  }
}

/////////////////// NAVIGATION ///////////////////

Login.navigationOptions = props => {
  return {
    title: 'Login',
    header: null
  }
}

/////////////////// EXPORTS ////////////////////////

export default connect(mapStateToProps, mapDispatchToProps)(Login)

