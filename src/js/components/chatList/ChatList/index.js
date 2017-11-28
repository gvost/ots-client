
/////////////////// IMPORTS /////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

import { View, ScrollView, RefreshControl } from 'react-native'
import ChatSummary from '../ChatSummary'
import Loader from '@components/core/Loader'

//////////////// THE COMPONENT //////////////////

export default class ChatList extends React.Component {

  componentWillMount() {
    this.props.getChats()
    this.setState({ refreshing: false })
  }

  onRefresh = () => {
    this.setState({ refreshing: true })
    this.props.getChats().then(() => {
      this.setState({ refreshing: false })
    })
  }

  render() {

    if (!this.props.chats.length)
      return <Loader />

    let chats = this.props.chats.map((chat, index) => {
      let isLast = index === this.props.chats.length - 1
      return (
        <View key={index}>
          <ChatSummary
            chat={chat}
            navigate={this.props.navigation.navigate} />
          { isLast ? null : <View style={styles.divider} /> }
        </View>
      )
    })

    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }>
        {chats}
      </ScrollView>
    )
  }
}

ChatList.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object).isRequired,
  getChats: PropTypes.func.isRequired
}
