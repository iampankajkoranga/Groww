import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export class CustomText extends Component {
  render() {
    // console.log(this.props)
    const {style} = this.props
    return (
      <View>
        {/* <Text style= {[styles.color, {...style}]}>{this.props.text}</Text> */}
        <Text style={[styles.color,{...style}]}>{this.props.children}</Text>
      </View>
    )
  }
}

export default CustomText;


const styles = StyleSheet.create({
    color: {
        color: 'white'
    },
  
})