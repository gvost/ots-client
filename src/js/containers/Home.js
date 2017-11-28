
/////////////////// IMPORTS /////////////////////

import React from 'react'
import { connect } from 'react-redux'
import Home from '@components/home/Home'
import { getProfiles } from '@state/users/actions'

/////////////// CONSTRUCT PROPS /////////////////

const mapStateToProps = state => {
  let { userId } = state.auth
  return {
    userId,
    profile: state.users[userId]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfile: (userId) => dispatch(getProfiles([ userId ]))
  }
}

////////////////// NAVIGATION ///////////////////

Home.navigationOptions = props => {
  return {
    title: 'Home'
  }
}

//////////////////// EXPORTS ////////////////////

export default connect(mapStateToProps, mapDispatchToProps)(Home)

