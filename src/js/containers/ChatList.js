
/////////////////// IMPORTS /////////////////////

import React from 'react'
import { connect } from 'react-redux'
import ChatList from '@components/chatList/ChatList'
import { getChats } from '@state/chats/actions'
import * as selectors from '@state/chats/selectors'

///////////////// CONSTRUCT PROPS ///////////////

const mapStateToProps = state => {
  return {
    chats: state.chats
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getChats: () => dispatch(getChats())
  }
}

/////////////////// NAVIGATION ///////////////////

ChatList.navigationOptions = props => {
  return {
    title: 'Chats'
  }
}

//////////////////// EXPORTS /////////////////////

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)

