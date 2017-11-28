
/////////////////// IMPORTS /////////////////////

import React from 'react'
import { connect } from 'react-redux'
import ChatInfo from '../components/chatInfo/ChatInfo'
import find from 'lodash/find'
import { getProfiles } from '@state/users/actions'
import { Button } from 'react-native'

///////////////// CONSTRUCT PROPS //////////////////

const mapStateToProps = (state, ownProps) => {
  let { chatId } = ownProps.navigation.state.params
  return {
    chat: find(state.chats, { chatId }),
    profiles: state.users,
    chatId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfiles: (userIds) => dispatch(getProfiles(userIds))
  }
}

/////////////////// NAVIGATION ///////////////////

ChatInfo.navigationOptions = props => {
  return {
    title: 'Lobby',
    headerRight: (
      <Button
        title='Join >'
        onPress={() => props.navigation.navigate('Chat',
          { chatId: props.navigation.state.params.chatId })}
      />
    )
  }
}

/////////////////// EXPORTS ////////////////////////

export default connect(mapStateToProps, mapDispatchToProps)(ChatInfo)

