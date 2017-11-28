
/////////////////// IMPORTS /////////////////////

import React from 'react'
import { connect } from 'react-redux'
import Chat from '@components/chat/Chat'
import { getMessages, exitChat, putMessage, loadEarlierMessages } from '@state/chats/actions'
import * as selectors from '@state/chats/selectors'
import NavIcon from '@components/core/NavIcon'
import find from 'lodash/find'

///////////////// CONSTRUCT PROPS ///////////////

const mapStateToProps = (state, ownProps) => {
  let { userId } = state.auth
  let { chatId } = ownProps.navigation.state.params
  let chat = find(state.chats, { chatId })
  return {
    userId,
    chatId,
    chat,
    profiles: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMessages: (chatId) => dispatch(getMessages(chatId)),
    exitChat: (chatId) => dispatch(exitChat(chatId)),
    putMessage: (chatId, message) => dispatch(putMessage(chatId, message)),
    loadEarlierMessages: (chatId) => dispatch(loadEarlierMessages(chatId))
  }
}

/////////////////// NAVIGATION ///////////////////

Chat.navigationOptions = props => {

  let imageStyle = {
    marginRight: 10,
    marginTop: 7
  }

  return {
    title: props.navigation.state.params.title,
    headerRight: (
      <NavIcon
        image={require('@images/icons/users.png')}
        imageStyle={imageStyle}
        onPress={() => console.log(props.navigation.state.params.chatId)}
      />
    )
  }
}

//////////////////// EXPORTS /////////////////////

export default connect(mapStateToProps, mapDispatchToProps)(Chat)


