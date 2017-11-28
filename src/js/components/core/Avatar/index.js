
/////////////////////// IMPORTS /////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

import { Image, View, TouchableOpacity } from 'react-native'
import CORE from '@styles'

///////////////////// THE COMPONENT /////////////////////

export default class Avatar extends React.Component {
  render() {
    let borderRadius = (this.props.size / 2)

    let borderStyles = {
      borderRadius: borderRadius + 5,
      borderWidth: 3,
      borderColor: CORE.colors[this.props.affiliation]
    }

    let containerStyles = [styles.container, borderStyles, this.props.containerStyles]

    let imageStyles = {
      width: this.props.size,
      height: this.props.size,
      borderRadius
    }

    let image = (
      <Image
        style={[styles.image, imageStyles]}
        source={{ uri: this.props.uri}} />
    )

    return (
      this.props.onPress ?
      <TouchableOpacity style={containerStyles} onPress={this.props.onPress}>
        { image }
      </TouchableOpacity> :
      <View style={containerStyles}>
        { image }
      </View>
    )
  }
}

Avatar.propTypes = {
  uri: PropTypes.string,
  image: PropTypes.any,
  style: PropTypes.any
}



