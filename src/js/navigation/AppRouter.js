
/*
  This is the root navigator. See https://reactnavigation.org/docs/navigators/

  Note that this file is imported in both @navigation/ReduxNavigator and in @state/nav/reducer.
*/

///////////////////////// IMPORTS //////////////////////////

import { StackNavigator } from 'react-navigation'

import Home from '@containers/Home'
import Login from '@containers/Login'
import StartChat from '@containers/StartChat'
import ChatList from '@containers/ChatList'
import ChatInfo from '@containers/ChatInfo'
import Chat from '@containers/Chat'
import Profile from '@containers/Profile'
import Settings from '@containers/Settings'

import CORE from '@styles'

/////////////////////// ROUTE CONFIGS //////////////////////

export default StackNavigator({

  Home:      { screen: Home },
  Login:     { screen: Login },
  StartChat: { screen: StartChat },
  ChatList:  { screen: ChatList },
  ChatInfo:  { screen: ChatInfo },
  Chat:      { screen: Chat },
  Profile:   { screen: Profile },
  Settings:  { screen: Settings }

}, {

  mode: 'card',
  headerMode: 'float',

  // globally customize the header
  // https://reactnavigation.org/docs/navigators/stack#Screen-Navigation-Options
  navigationOptions: props => {
    return {
      headerStyle: {
        backgroundColor: CORE.colors.white
      }
    }
  }

})

