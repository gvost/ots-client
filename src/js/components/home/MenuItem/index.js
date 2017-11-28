
/////////////////////// IMPORTS /////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

import { View, Text, TouchableOpacity } from 'react-native'

///////////////////// THE COMPONENT /////////////////////

export default class MenuItem extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.containerStyles]}
        onPress={this.props.onPress}>
        <Text style={styles.text}>{ this.props.title }</Text>
      </TouchableOpacity>
    )
  }
}

MenuItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

