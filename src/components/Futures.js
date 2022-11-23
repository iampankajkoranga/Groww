import { Text, View,Image,StyleSheet } from 'react-native'
import React, { Component } from 'react'
import CustomText from './CustomText'

export class Futures extends Component {
  render() {
    return (
      <View style={styles.future}>
        <Image     style={styles.headerLogo}
                source={require('../assets/futures.jpeg')}/>
        <CustomText style={styles.text}>{this.props.name}</CustomText>
        <View></View>
        <View></View>

      </View>
    )
  }
}

export default Futures

const styles=StyleSheet.create({
    headerLogo:{
        height:20,
        width:20
    },
    future:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"rgb(29,29,29)",
        width:150,
        padding:12,
        borderRadius:10

    },
    text:{
        fontWeight:"700",
    }
})