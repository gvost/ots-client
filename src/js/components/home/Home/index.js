
/////////////////////// IMPORTS /////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

import { View, Text, Button, Dimensions } from 'react-native'
import RoundedImage from '@components/core/RoundedImage'
import Avatar from '@components/core/Avatar'
import Loader from '@components/core/Loader'
import MenuItem from '../MenuItem'
import { intArray } from '@util/misc'

///////////////////// THE COMPONENT /////////////////////

export default class Home extends React.Component {

  componentWillMount() {
    if (!this.props.profile && this.props.userId)
      this.props.getProfile(this.props.userId)
  }

  navTo(screen, params={}) {
    return () => this.props.navigation.navigate(screen, params)
  }

  render() {

    if (!this.props.profile || !this.props.userId)
      return <Loader />

    return (
      <View style={styles.container}>

        <Avatar
          onPress={this.navTo('Profile', { userId: this.props.userId, isCurrentUser: true })}
          containerStyles={styles.avatar}
          uri={this.props.profile.avatar}
          border={true}
          affiliation={this.props.profile.affiliation}
          size={60} />

        <View style={styles.buttonSection}>

          <MenuItem
            onPress={this.navTo('StartChat')}
            title="start a conversation" />

          <MenuItem
            onPress={this.navTo('ChatList')}
            title="join a conversation"
            containerStyles={{ marginBottom: 90 }} />

        </View>

        <RoundedImage
          onPress={this.navTo('Settings')}
          style={styles.settingsImage}
          image={require('@images/icons/settings-icon.png')} />

      </View>
    )
  }
}

Home.propTypes = {}
