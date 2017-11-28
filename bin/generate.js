
/*
  This script generates a new component, container, or state manager.

  USAGE:
    node bin/generate --type=[type] --name=[name] --path=[path]

    where type is one of 'component', 'container', or 'state'
          name is the name of the thing being created
          path (optional, defaults to '') is the path that separates
          the base directory from the thing being created.

*/

////////////////////// IMPORTS ////////////////////////

const argv = require('minimist')(process.argv)
const fs = require('fs')
const path = require('path')

/////////////////////// CONFIG ////////////////////////

const DIRS = {
  component: '../src/js/components',
  container: '../src/js/containers',
  state:     '../src/js/state',
}

//////////////////////// UTILS ////////////////////////

function createDirectory(path, cb) {
  fs.mkdir(path, err => {
    if (err) {
      console.log(`Error creating directory: ${path}`)
      console.log(err)
    } else {
      console.log(`Created directory: ${path}`)
      cb()
    }
  })
}

function createFile(filepath, contents) {
  fs.writeFile(filepath, contents || '', err => {
    if (err)
      console.log(`Error creating file: ${filepath}`)
    else
      console.log(`Created file: ${filepath}`)
  })
}

function capFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

///////////////////// TEMPLATES ///////////////////////

function actionTypesImport() {
  return "import * as types from './actionTypes'"
}

function baseComponent(name) {

  return `
/////////////////////// IMPORTS /////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

import { View, Text } from 'react-native'

///////////////////// THE COMPONENT /////////////////////

export default class ${name} extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>${name} Component</Text>
      </View>
    )
  }
}

${name}.propTypes = {}

`
}

function baseComponentStyles() {

  return `
import { StyleSheet } from 'react-native'
import CORE from '@styles'

export default StyleSheet.create({
  container: {
    flex: 1
  }
})

`
}

function baseContainer(name, compPath) {

  compPath = compPath ? compPath + '/' : ''

  return `
/////////////////// IMPORTS /////////////////////

import React from 'react'
import { connect } from 'react-redux'
import ${name} from '../components/${compPath}${name}'

///////////////// CONSTRUCT PROPS //////////////////

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

/////////////////// NAVIGATION ///////////////////

${name}.navigationOptions = props => {
  return {
    title: '${name}'
  }
}

/////////////////// EXPORTS ////////////////////////

export default connect(mapStateToProps, mapDispatchToProps)(${name})

`
}

////////////////////////// MAIN ////////////////////////////

let {
  type,
  name,
  path: dirPath,
  compPath
} = argv

if (!type) {
  console.log('A type argument is required.')
  process.exit(0)
} else if (!name) {
  console.log('A name argument is required.')
  process.exit(0)
}

const absPath = path.join(__dirname, DIRS[type], dirPath || '', name)

console.log("------------- GENERATING ------------")
console.log("TYPE:", type)
console.log("NAME:", name)
console.log("PATH:", absPath, "\n")

switch(type) {
  case 'component':
    createDirectory(absPath, () => {
      createFile(absPath + '/index.js', baseComponent(name))
      createFile(absPath + '/styles.js', baseComponentStyles(name))
    })
    break;
  case 'container':
    createFile(absPath + '.js', baseContainer(name, compPath))
    break;
  case 'state':
    createDirectory(absPath, () => {
      createFile(`${absPath}/reducer.js`, actionTypesImport())
      createFile(`${absPath}/actions.js`, actionTypesImport())
      createFile(`${absPath}/actionTypes.js`)
      createFile(`${absPath}/constants.js`)
      createFile(`${absPath}/selectors.js`)
    })
    break;
}











