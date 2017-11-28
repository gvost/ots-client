
/////////////////// IMPORTS /////////////////////

import React from 'react'
import { connect } from 'react-redux'
import Profile from '../components/profile/Profile'
import { getProfiles, updateProfile } from '@state/users/actions'
import { Button, ActivityIndicator } from 'react-native'

///////////////// CONSTRUCT PROPS //////////////////

const mapStateToProps = (state, ownProps) => {
  let { userId } = ownProps.navigation.state.params
  return {
    userId,
    profile: state.users[userId]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfile: (userId) => dispatch(getProfiles([ userId ])),
    updateProfile: (userId, profile) => dispatch(updateProfile(userId, profile))
  }
}

/////////////////// NAVIGATION ///////////////////

Profile.navigationOptions = props => {
  let { navigation } = props
  let { params } = navigation.state

  let headerRight = (() => {
    if (!params.isCurrentUser)
      return null

    let { editMode } = params
    editMode = editMode || 'showing'

    switch(editMode) {
      case 'showing':
        return (
          <Button
            title='Edit'
            onPress={() => navigation.setParams({ editMode: 'editing' })}
          />
        )
      case 'editing':
        return (
          <Button
            title='Save'
            onPress={() => {
              navigation.setParams({ editMode: 'saving' })
              params.updateProfile().then(() => {
                navigation.setParams({ editMode: 'showing' })
              })
            }}
          />
        )
      case 'saving':
        return (
          <ActivityIndicator
            size='small'
            style={{ marginRight: 15 }}
            color='#0A73FF' />
        )
    }
  })()

  return {
    title: 'Profile',
    headerRight
  }
}

/////////////////// EXPORTS ////////////////////////

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

