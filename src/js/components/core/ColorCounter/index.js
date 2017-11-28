
/////////////////////// IMPORTS /////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

import { View, Text } from 'react-native'

///////////////////// THE COMPONENT /////////////////////

export default class ColorCounter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.count}>{this.props.count}</Text>
        <View style={[styles.circle, {backgroundColor: this.props.color}]} />
      </View>
    )
  }
}

ColorCounter.propTypes = {
  count: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
}

