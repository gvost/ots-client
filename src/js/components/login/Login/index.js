
/////////////////////// IMPORTS /////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import CORE from '@styles'

import {
  View, KeyboardAvoidingView, Text, TextInput, Keyboard, ScrollView,
  TouchableOpacity,  Image, ActivityIndicator, TouchableWithoutFeedback
} from 'react-native'
import Loader from '@components/core/Loader'
import { NavigationActions } from 'react-navigation'

///////////////////// THE COMPONENT /////////////////////

export default class Login extends React.Component {

  goHome = () => {
    this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'})
      ]
    }))
  }

  componentWillMount() {
    this.setState({
      username: 'user0',
      password: 'password',
      error: ''
    })

    if (this.props.auth.isAuthenticated)
      this.goHome()
    else if (!this.props.auth.authChecked)
      this.props.checkAuth()
  }

  componentWillReceiveProps() {
    if (this.props.auth.isAuthenticated)
      this.goHome()
  }

  login = () => {
    this.props.login(this.state.username, this.state.password)
  }

  render() {
    if (!this.props.auth.authChecked)
      return <View style={styles.container} />

    let error = (
      this.props.auth.authError ?
      <Text>{this.props.auth.authError}</Text> :
      null
    )

    let placeholderColor = 'rgba(73, 238, 201, 0.2)'

    let indicator = (
      this.props.auth.isLoggingIn ?
      <ActivityIndicator
        size='small'
        color={CORE.colors.cyan}
        style={styles.activityIndicator}
      /> :
      null
    )

    return (
      <KeyboardAvoidingView
        behavior='padding'
        style={styles.container}>
        {/*<Image
          style={{width: 250, resizeMode: 'contain', position: 'absolute', top: 10}}
          source={require('@images/intro-logo.png')}
        />*/}
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ username: text })}
          value={this.state.username}
          placeholder="enter username"
          placeholderTextColor={placeholderColor}
          onBlur={data => console.log(data)}
          autoCapitalize='none'
          onSubmitEditing={Keyboard.dismiss}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
          placeholder="enter password"
          placeholderTextColor={placeholderColor}
          autoCapitalize='none'
          secureTextEntry={true}
        />
        <TextInput
          style={styles.errorText}
          value={this.props.auth.authError || ' '}
          editable={false}
        />
        <View>
          <TouchableOpacity
            style={styles.loginButtonContainer}
            onPress={this.login}>
            <Text style={styles.loginButton}>sign in</Text>
          </TouchableOpacity>
          { indicator }
        </View>
      </KeyboardAvoidingView>
    )
  }
}

Login.propTypes = {}

