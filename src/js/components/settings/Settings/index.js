
/////////////////////// IMPORTS /////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

import { View, Text, Button } from 'react-native'
import { NavigationActions } from 'react-navigation'

///////////////////// THE COMPONENT /////////////////////

export default class Settings extends React.Component {

  goToLogin = () => {
    this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Login'})
      ]
    }))
  }

  componentWillMount() {
    if (!this.props.auth.isAuthenticated)
      this.goToLogin()
  }

  componentWillReceiveProps() {
    if (!this.props.auth.isAuthenticated)
      this.goToLogin()
  }

  logout = () => {
    this.props.logout()
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.logout}
          title="sign out" />
      </View>
    )
  }
}

Settings.propTypes = {}

