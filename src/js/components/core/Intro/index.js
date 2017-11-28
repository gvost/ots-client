/////////////////// IMPORTS /////////////////////

import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Loader from '@components/core/Loader'
import styles from './styles'

//////////////// THE COMPONENT //////////////////

export default class IntroView extends React.Component {

  static navigationOptions = {
    title: 'theOtherSide',
  }

  componentWillMount () {
    this.setState({ loading: true })
  }

  render () {
    //const { navigate } = this.props.navigation

    const navigate = () => console.log('navigating')

    return (
      <View style={styles.container}>
        <Image style={styles.introLogo} resizeMode='contain' source={require('@images/intro-logo.png')} />
        <View>
          <Text style={styles.text}>a place where you can create a conversation with someone who you doubt would understand you </Text>
          <Text style={styles.text}>vent your frustration, be angry… say “fuck you” if you want, it’s totally anonymous</Text>
          <Text style={styles.text}>duke it out, and maybe feel better, maybe even see a little bit of what “they” were trying to say.</Text>
          <Text style={styles.text}>just to reiterate, this experience will not be tied to your identity at all, and you will not be liable for what you say, but remember neither is anyone else.</Text>
        </View>
        <TouchableOpacity onPress={() => navigate('Chat', { name: 'Jane' }) } style={styles.button}>
          <Text style={styles.buttonText}>go</Text>
        </TouchableOpacity>
      </View>
    )
  }
}