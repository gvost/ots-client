
/////////////////// IMPORTS /////////////////////

import React from 'react'
import { connect } from 'react-redux'
import StartChat from '../components/startChat/StartChat'

///////////////// CONSTRUCT PROPS //////////////////

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

/////////////////// NAVIGATION ///////////////////

StartChat.navigationOptions = props => {
  return {
    title: 'StartChat'
  }
}

/////////////////// EXPORTS ////////////////////////

export default connect(mapStateToProps, mapDispatchToProps)(StartChat)

