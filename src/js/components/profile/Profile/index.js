
/////////////////////// IMPORTS /////////////////////////

import React from 'react'
import PropTypes from 'prop-types'

import Loader from '@components/core/Loader'
import ShowProfile from '../ShowProfile'
import EditProfile from '../EditProfile'

///////////////////// THE COMPONENT /////////////////////

export default class Profile extends React.Component {

  componentWillMount() {
    if (!this.props.profile)
      this.props.getProfile(this.props.userId)
  }

  render() {
    if (!this.props.profile)
      return <Loader />

    let { editMode } = this.props.navigation.state.params

    return (
      editMode === 'editing' || editMode === 'saving' ?
      <EditProfile
        profile={this.props.profile}
        navigation={this.props.navigation}
        updateProfile={this.props.updateProfile}
        userId={this.props.userId}
      /> :
      <ShowProfile
        profile={this.props.profile}
      />
    )
  }
}

Profile.propTypes = {
  userId: PropTypes.string.isRequired
}

