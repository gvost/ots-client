
/////////////////////// IMPORTS /////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

import { View, Text, TextInput } from 'react-native'
import Avatar from '@components/core/Avatar'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ImagePicker } from 'expo'

///////////////////// THE COMPONENT /////////////////////

export default class EditProfile extends React.Component {

  componentWillMount() {
    this.setState({
      ...this.props.profile
    })
    this.props.navigation.setParams({
      updateProfile: this.updateProfile
    })
  }

  updateProfile = () => {
    return this.props.updateProfile(this.props.userId, this.state)
  }

  pickImage = () => {
    ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      base64: true,
      aspect: [1.0, 1.0]
    })
    .then(image => {
      if (!image.cancelled)
        this.setState({
          avatar: 'data:image/jpeg;base64,' + image.base64
        })
    })
  }

  render() {
    let profile = this.state
    let placeholderColor = 'rgba(255, 255, 255, 0.3)'

    return (
      <KeyboardAwareScrollView
        extraHeight={150}
        style={styles.container}>
        <View style={styles.avatarAndScreenName}>
          <Avatar
            containerStyles={styles.avatar}
            uri={profile.avatar}
            border={true}
            affiliation={profile.affiliation}
            size={60}
            onPress={this.pickImage} />
          <TextInput
            style={[styles.textInput, styles.screenNameTextInput]}
            onChangeText={text => this.setState({ screenName: text })}
            value={this.state.screenName}
            placeholder="screen name"
            placeholderTextColor={placeholderColor}
            autoCapitalize='none'
          />
        </View>
        <Text style={[styles.text, styles.header]}>tagline</Text>
        <TextInput
          style={[styles.textInput, styles.tagLineTextInput]}
          onChangeText={text => this.setState({ tagLine: text })}
          value={this.state.tagLine}
          placeholder="enter tagline"
          placeholderTextColor={placeholderColor}
          autoCapitalize='none'
          multiline={true}
        />
        <Text style={[styles.text, styles.header]}>bio</Text>
        <TextInput
          ref="bioInput"
          style={[styles.textInput, styles.bioTextInput]}
          onChangeText={text => this.setState({ bio: text })}
          value={this.state.bio}
          placeholder="enter bio"
          placeholderTextColor={placeholderColor}
          autoCapitalize='none'
          multiline={true}
        />
      </KeyboardAwareScrollView>
    )
  }
}

EditProfile.propTypes = {}

