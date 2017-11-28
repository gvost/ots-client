
/////////////////////// IMPORTS /////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

import { View, Text } from 'react-native'
import Avatar from '@components/core/Avatar'

///////////////////// THE COMPONENT /////////////////////

export default class ShowProfile extends React.Component {

  render() {
    let { profile } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.avatarAndScreenName}>
          <Avatar
            containerStyles={styles.avatar}
            uri={profile.avatar}
            border={true}
            affiliation={profile.affiliation}
            size={60} />
          <Text style={[styles.text, styles.screenName]}>{profile.screenName}</Text>
        </View>
        <Text style={[styles.text, styles.header]}>tagline</Text>
        <Text style={[styles.text, styles.tagLine]}>{profile.tagLine}</Text>
        <Text style={[styles.text, styles.header]}>bio</Text>
        <Text style={[styles.text, styles.bio]}>{profile.bio}</Text>
      </View>
    )
  }
}

ShowProfile.propTypes = {
  profile: PropTypes.object.isRequired
}

