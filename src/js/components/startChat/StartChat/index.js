
/////////////////////// IMPORTS /////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

import { View, Text } from 'react-native'

///////////////////// THE COMPONENT /////////////////////

export default class StartChat extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>StartChat Component</Text>
      </View>
    )
  }
}

StartChat.propTypes = {}

