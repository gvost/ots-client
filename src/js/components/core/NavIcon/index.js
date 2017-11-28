
/////////////////////// IMPORTS /////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

import { Image, TouchableOpacity } from 'react-native'

///////////////////// THE COMPONENT /////////////////////

export default class NavIcon extends React.Component {
  render() {
    let source = this.props.uri ?
                 { uri: this.props.uri } :
                 this.props.image
    return (
      <TouchableOpacity
        style={[styles.container, this.props.containerStyle]}
        onPress={this.props.onPress}>
        <Image
          style={[styles.image, this.props.imageStyle]}
          source={source}/>
      </TouchableOpacity>
    )
  }
}

NavIcon.propTypes = {
  onPress: PropTypes.func,
  uri: PropTypes.string,
  image: PropTypes.any,
  imageStyle: PropTypes.any,
  containerStyle: PropTypes.any
}

