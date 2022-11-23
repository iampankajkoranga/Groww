import {Text, View, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import CustomText from '../components/CustomText';
import Shares from '../components/Shares';

export class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.holdingHead}>
          <View style={styles.empty}>
            <Text></Text>
          </View>
          <View style={styles.holding}>
            <View style={styles.main}>
              <CustomText style={styles.textOne}>Holdings</CustomText>
              <CustomText style={styles.numText}> (4)</CustomText>
            </View>

            <CustomText style={styles.textTwo}>Verify holdings</CustomText>
          </View>
        </View>

        <View style={styles.values}>
          <View style={styles.value}>
            <View>
              <CustomText>Invested</CustomText>
              <CustomText style={styles.texts}>₹1500</CustomText>
            </View>
            <View>
              <CustomText>Current</CustomText>
              <CustomText style={styles.texts}>₹2000</CustomText>
            </View>
            <View>
              <CustomText>Total Returns</CustomText>
              <CustomText style={styles.texts}>+₹500</CustomText>
            </View>
          </View>
          <View style={styles.returnData}>
            <View style={styles.returns}>
              <CustomText>1D Returns</CustomText>
              <CustomText style={styles.num}> +₹15.12(0.72%)</CustomText>
            </View>
            <View>
              <CustomText style={styles.allText}>All orders</CustomText>
            </View>
          </View>
        </View>
        <View style={styles.sortContainer}>
          <View style={styles.sort}>
            <CustomText style={styles.sortText}>Sort</CustomText>
            <Image
              style={styles.logo}
              source={require('../assets/sorts.png')}
            />
          </View>
          <View>
            <CustomText style={styles.sortText}>Current (Invested)</CustomText>
          </View>
        </View>
        
        <View style={styles.shareView}>
          <Shares></Shares>
        </View>
        <View style={styles.emptyOne}>
          <Text></Text>
        </View>
      </View>
    );
  }
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
  },
  holdingHead: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  empty: {
    backgroundColor: 'rgb(84,183,148)',
    width: 10,
  },
  holding: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:"red",
    width: '90%',
  },
  textOne: {
    fontSize: 18,
    fontWeight: '600',
  },
  logo: {
    height: 20,
    width: 20,
    marginLeft: 8,
  },
  textTwo: {
    color: 'rgb(82,170,135)',
    fontWeight: '600',
    fontSize:15,
    marginTop:3
  },
  numText: {
    color: 'grey',
    marginTop: 4,
  },

  main: {
    flexDirection: 'row',
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  values: {
    backgroundColor: 'rgb(29,29,29)',
    marginHorizontal: 10,
    padding: 12,
  },
  returns: {
    flexDirection: 'row',
  },
  returnData: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  num: {
    color: 'rgb(82,170,135)',
    fontWeight: '600',
    fontSize: 15,
  },
  allText: {
    color: 'rgb(82,170,135)',
    fontSize: 15,
    fontWeight: '700',
  },
  texts: {
    marginTop: 8,
    fontWeight: 'bold',
  },
  sort: {
    flexDirection: 'row',
  },
  sortText: {
    fontSize: 15,
    color:"lightgrey"
  },
  sortContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  // shareView:{
  //   marginBottom:30

  // }
  emptyOne:{
    height:140
  }
});
