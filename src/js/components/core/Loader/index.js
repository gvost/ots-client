
/////////////////// IMPORTS /////////////////////

import React from 'react'
import styles from './styles'
import CORE from '@styles'

import { View, ActivityIndicator } from 'react-native'

//////////////// THE COMPONENT //////////////////

export default class Loader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size={this.props.size || 'large'}
          color={CORE.colors.cyan} />
      </View>
    )
  }
}