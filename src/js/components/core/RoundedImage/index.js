
/////////////////////// IMPORTS /////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

import { Image, TouchableOpacity } from 'react-native'

///////////////////// THE COMPONENT /////////////////////

export default class RoundedImage extends React.Component {
  render() {
    let source = this.props.uri ?
                 { uri: this.props.uri } :
                 this.props.image

    return (
      <TouchableOpacity
        style={this.props.style}
        onPress={this.props.onPress}>
        <Image
          style={styles.image}
          source={source}/>
      </TouchableOpacity>
    )
  }
}

RoundedImage.propTypes = {
  uri: PropTypes.string,
  image: PropTypes.any,
  style: PropTypes.any
}

