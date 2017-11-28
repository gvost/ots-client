
////////////////////// IMPORTS ////////////////////////

import React from 'react'
import { Provider } from 'react-redux'
import { Font, AppLoading } from 'expo'
import createStore from '@redux/createStore'
import reducer from '@state'
import ReduxNavigator from '@navigation/ReduxNavigator'
import Promise from '@util/promise'

/////////////////// THE COMPONENT /////////////////////

class App extends React.Component {

  componentWillMount() {
    this.setState({
      isReady: false,
      store: createStore(reducer) // create the store only once
    })
  }

  loadResources() {
    return Promise.all([
      Font.loadAsync({
        'Circular-Book':  require('@fonts/circular/Circular-Book.ttf'),
        'Circular-Black': require('@fonts/circular/Circular-Black.ttf'),
        'Circular-Bold':  require('@fonts/circular/Circular-Bold.ttf')
      })
    ])
  }

  render () {
    if (!this.state.isReady)
      return (
        <AppLoading
          startAsync={this.loadResources}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )

    return (
      <Provider store={this.state.store}>
        <ReduxNavigator />
      </Provider>
    )
  }
}

///////////////////////// BOOT /////////////////////////

Expo.registerRootComponent(App)
