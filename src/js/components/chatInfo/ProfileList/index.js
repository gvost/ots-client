
/////////////////////// IMPORTS /////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

import { View, Text, TouchableOpacity, Image } from 'react-native'

///////////////////// THE COMPONENT /////////////////////

export default class ProfileList extends React.Component {

  goToProfile = (userId) => {
    this.props.navigate('Profile', { userId })
  }

  render() {
    let { profiles } = this.props
    let profileList = Object.keys(profiles).map((userId, idx) => {
      return (
        <View
          key={idx}
          style={styles.itemContainer}>
          { idx === 0 ? <View style={styles.divider} /> : null }
          <TouchableOpacity
            style={styles.profileContent}
            onPress={this.goToProfile.bind(null, userId)}>
            <Image style={styles.avatar} source={{uri: profiles[userId].avatar}} />
            <Text style={{color: 'white'}}>{profiles[userId].screenName}</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
        </View>
      )
    })

    return (
      <View style={styles.container}>
        { profileList }
      </View>
    )
  }
}

ProfileList.propTypes = {}

