
/////////////////////// IMPORTS /////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import RoundedImage from '@components/core/RoundedImage'
import moment from 'moment'

import { View, Text, Button, TouchableOpacity } from 'react-native'

///////////////////// THE COMPONENT /////////////////////

export default class ChatSummary extends React.Component {

  handlePress() {
    this.props.navigate('ChatInfo', {
      chatId: this.props.chat.chatId
    })
  }

  render() {
    let { participants } = this.props.chat
    let affiliations = Object.values(participants)

    let redCount = affiliations.filter(el => el === 'red').length
    let blueCount = affiliations.length - redCount
    let dateCreated = moment(this.props.chat.meta.createdAt).format('MMM Do h:mm a')

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.handlePress.bind(this)}>
        <Text style={styles.title}>{this.props.chat.title}</Text>
        <View style={styles.meta}>
          <View style={styles.count}>
            <Text style={styles.metaText}>{redCount}</Text>
            <View style={styles.redCircle} />
          </View>
          <View style={styles.count}>
            <Text style={styles.metaText}>{blueCount}</Text>
            <View style={styles.blueCircle} />
          </View>
          <Text style={[styles.metaText, styles.dateCreated]}>{dateCreated}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

ChatSummary.propTypes = {
  chat: PropTypes.object.isRequired
}

