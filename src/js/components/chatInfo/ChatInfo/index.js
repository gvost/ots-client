
/////////////////////// IMPORTS /////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

import { View, Text, ScrollView } from 'react-native'
import ProfileList from '../ProfileList'
import ColorCounter from '@components/core/ColorCounter'
import CORE from '@styles'

///////////////////// THE COMPONENT /////////////////////

export default class ChatInfo extends React.Component {

  componentWillMount() {
    this.setState({ loadingProfiles: true })
    let userIds = Object.keys(this.props.chat.participants)
    this.props.getProfiles(userIds).then(() => {
      this.setState({ loadingProfiles: false })
    })
  }

  render() {
    let { chat, profiles } = this.props
    let { participants } = chat

    let profileLists = (() => {
      if (this.state.loadingProfiles)
        return null

      let userIds = Object.keys(participants)
      let redUserIds = userIds.filter(userId => participants[userId] === 'red')
      let blueUserIds = userIds.filter(userId => participants[userId] === 'blue')

      let redProfiles = {}
      redUserIds.forEach(userId => redProfiles[userId] = profiles[userId])

      let blueProfiles = {}
      blueUserIds.forEach(userId => blueProfiles[userId] = profiles[userId])

      return (
        <View>
          <ColorCounter count={redUserIds.length} color={CORE.colors.red} />
          <ProfileList profiles={redProfiles} navigate={this.props.navigation.navigate} />
          <ColorCounter count={blueUserIds.length} color={CORE.colors.blue} />
          <ProfileList profiles={blueProfiles} navigate={this.props.navigation.navigate} />
        </View>
      )
    })()

    return (
      <ScrollView style={styles.container}>
        <View style={styles.topSection}>
          <Text style={styles.titleText}>{ chat.title }</Text>
        </View>
        { profileLists }
      </ScrollView>
    )
  }
}

ChatInfo.propTypes = {}

