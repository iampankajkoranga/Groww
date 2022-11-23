import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import CustomText from './CustomText';

export class Section extends Component {
  render() {
    return (
      <View>
        <View style={styles.sectionOne}>
          <View style={styles.section}>
            <View>
              <Image
                style={styles.logos}
                source={require('../assets/account1.png')}
              />
            </View>
            <View style={styles.bal}>
              <CustomText style={styles.amount}>{this.props.title}</CustomText>
              <CustomText>{this.props.subtitle}</CustomText>
            </View>
          </View>

          {this.props.id === '101' && (
            <View style={styles.money}>
              <CustomText
                style={{
                  color: 'rgb(89,189,144)',
                  fontWeight: '600',
                  marginHorizontal: 8,
                }}>
                +ADD MONEY
              </CustomText>
            </View>
          )}

          {this.props.id === '102' && (
            <View style={styles.money}>
              <View>
                <Image style={styles.img} source={require('../assets/whats.png')} />
              </View>
              <View>
                <CustomText
                  style={{
                    color: 'rgb(89,189,144)',
                    fontWeight: '600',
                    marginHorizontal: 20,
                  }}>
                  GET 300
                </CustomText>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default Section;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
    // marginHorizontal:10
  },
  container: {
    marginHorizontal: 10,
  },
  logo: {
    height: 50,
    width: 50,
    // marginRight: 20,
  },
  logos: {
    height: 30,
    width: 30,
    //    marginRight: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal:10
  },
  logoss: {
    height: 27,
    width: 27,
  },
  bell: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
  name: {
    flexDirection: 'row',
    marginTop: 20,
    // justifyContent:"space-around",
    width: '80%',
    // padding:5
  },
  nameText: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 10,
  },
  nameTextTwo: {
    color: 'lightgrey',
  },

  logos: {
    height: 30,
    width: 30,
  },
  name: {
    flexDirection: 'row',
    marginTop: 20,
    // justifyContent:"space-around",
    width: '80%',
    // padding:5
  },
  nameText: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 10,
  },
  nameTextTwo: {
    color: 'lightgrey',
  },
  sectionOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //   backgroundColor:"red",
    // paddingHorizontal:10,
    // justifyContent:"center",
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    //   marginBottom:
  },
  section: {
    flexDirection: 'row',
    // backgroundColor:"red",
    //   justifyContent:"space-between",
    width: 170,
    marginTop: 20,
    //   marginBottom:4
  },
  amount: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  money: {
    backgroundColor: 'rgb(22,33,30)',
    marginTop: 25,
    flexDirection:"row",
    // justifyContent: 'center',
    padding: 10,
    borderRadius: 30,
    height: 35,
  },
  bal: {
    marginLeft: 20,
  },
  img:{
    position:"absolute",
    height:17,
    width:17,
    marginLeft:1
  }
});
