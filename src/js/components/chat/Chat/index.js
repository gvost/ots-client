
/////////////////// IMPORTS /////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import CORE from '@styles'

import { View, Text } from 'react-native'
import Loader from '@components/core/Loader'
import {
  GiftedChat,
  Bubble,
  MessageText,
  Time,
  Day,
  Composer,
  InputToolbar,
  LoadEarlier
} from 'react-native-gifted-chat'

////// CUSTOMIZED GIFTED-CHAT COMPONENTS ////////

// https://github.com/FaridSafi/react-native-gifted-chat/blob/master/src/Bubble.js
const CustomBubble = (bubblePosition, onPressBubble) => {
  return (props) => {
    let { affiliation } = props.currentMessage.user
    let bgColor = CORE.colors[affiliation]

    let wrapperStyle = {
      right: { backgroundColor: bgColor, marginRight: 8 },
      left:  { backgroundColor: bgColor },
    }

    return (
      <Bubble
        { ...props }
        position={bubblePosition(props)}
        touchableProps={{ onPress: () => onPressBubble(props) }}
        wrapperStyle={wrapperStyle}
      />
    )
  }
}


// https://github.com/FaridSafi/react-native-gifted-chat/blob/master/src/MessageText.js
const CustomMessageText = (props) => {
  return (
    <MessageText { ...props } customTextStyle={styles.messageText} />
  )
}

// https://github.com/FaridSafi/react-native-gifted-chat/blob/master/src/Time.js
const CustomTime = (props) => {
  let textColor = styles.time.color
  let textStyle = {
    right: { color: CORE.colors.white },
    left:  { color: CORE.colors.white }
  }

  return (
    <View>
      <Text style={styles.screenName}>
        { props.currentMessage.user.name }
      </Text>
      <Time { ...props } textStyle={textStyle} />
    </View>
  )
}

// https://github.com/FaridSafi/react-native-gifted-chat/blob/master/src/Day.js
const CustomDay = (props) => {
  let textStyle = { color: CORE.colors.white }
  return (
    <Day { ...props } textStyle={textStyle}/>
  )
}

// https://github.com/FaridSafi/react-native-gifted-chat/blob/master/src/Composer.js
const CustomComposer = (props) => {
  return (
    <Composer { ...props } textInputStyle={styles.composer} />
  )
}

// https://github.com/FaridSafi/react-native-gifted-chat/blob/master/src/InputToolbar.js
const CustomInputToolbar = (props) => {
  return (
    <InputToolbar
      { ...props }
      containerStyle={styles.inputToolbarContainer}
      primaryStyle={styles.inputToolbarPrimary}
    />
  )
}

// https://github.com/FaridSafi/react-native-gifted-chat/blob/master/src/LoadEarlier.js
const CustomLoadEarlier = (onLoadEarlier) => {
  return props => (
    <LoadEarlier
      { ...props }
      onLoadEarlier={onLoadEarlier}
      wrapperStyle={styles.loadEarlier} />
  )
}

//////////////// THE COMPONENT //////////////////

export default class Chat extends React.Component {

  // LIFECYCLE FUNCTIONS
  componentWillMount() {
    if (!this.props.chat.messages)
      this.props.getMessages(this.props.chatId)
    this.setState({ isLoadingEarlier: false })
  }

  componentWillUnmount() {
    this.props.exitChat(this.props.chatId)
  }

  // DATA FUNCTIONS
  putMessage = (message) => {
    this.props.putMessage(this.props.chatId, message[0].text)
  }

  loadEarlier = () => {
    this.setState({ isLoadingEarlier: true })
    this.props.loadEarlierMessages(this.props.chatId)
      .then(() => this.setState({ isLoadingEarlier: false }))
  }

  // NAVIGATION (unused since removal of avatars)
  onPressAvatar = (user) => {
    this.props.navigation.navigate('Profile', {
      userId: user._id
    })
  }

  // GIFTED CHAT OVERRIDES
  // these functions take the props passed by GiftedChat
  bubblePosition = (gcProps) => {
    let userAffil = this.props.profiles[this.props.userId].affiliation
    let messageAffil = gcProps.currentMessage.user.affiliation

    return messageAffil === userAffil ? 'right' : 'left'
  }

  navToProfile = (gcProps) => {
    let userId = gcProps.currentMessage.user._id
    this.props.navigation.navigate('Profile', { userId })
  }

  // RENDER
  render() {
    if (!this.props.chat.messages)
      return <Loader />

    let { profiles } = this.props
    let { messages } = this.props.chat

    // convert messages to the format required by GiftedChat
    let preppedMessages = messages.map((message, idx) => {
      let { userId } = message
      let profile = profiles[userId]

      return {
        _id: idx,
        text: message.text,
        createdAt: message.createdAt,
        user: {
          _id: userId,
          name: profile.screenName,
          avatar: null, //profile.avatar,
          affiliation: profile.affiliation
        }
      }
    })

    // whether to show the 'load earlier messages' button
    let showLoadEarlier = messages.length < this.props.chat.meta.numMessages

    // note: setting user._id to null prevents the tickView from rendering
    // which eliminates the gap next to user messages
    return (
      <View style={styles.container}>
        <GiftedChat
          messages={preppedMessages}
          user={{ _id: null }}

          onSend={this.putMessage}
          onPressAvatar={this.onPressAvatar}

          renderBubble={CustomBubble(this.bubblePosition, this.navToProfile)}
          renderMessageText={CustomMessageText}
          renderTime={CustomTime}
          renderDay={CustomDay}
          renderInputToolbar={CustomInputToolbar}
          renderComposer={CustomComposer}

          loadEarlier={showLoadEarlier}
          renderLoadEarlier={CustomLoadEarlier(this.loadEarlier)}
          isLoadingEarlier={this.state.isLoadingEarlier}
        />
      </View>
    )
  }
}

// TODO: add chat, user, id data to this
// need to address fact that chat is initially undefined
Chat.propTypes = {
  getMessages: PropTypes.func.isRequired,
  putMessage: PropTypes.func.isRequired,
  exitChat: PropTypes.func.isRequired
}
