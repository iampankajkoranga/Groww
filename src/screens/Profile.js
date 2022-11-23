import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomText from '../components/CustomText';
import Section from '../components/Section';

export class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.main}>
        <StatusBar barStyle="light-content"></StatusBar>

        <View style={styles.container}>
          <View style={styles.header}>
            <View>
              <TouchableOpacity onPress={()=>this.props.navigation.goback()}>
                <Image
                  style={styles.logos}
                  source={require('../assets/backWhite.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.bell}>
              <View>
                <Image
                  style={styles.logoss}
                  source={require('../assets/settings.png')}
                />
              </View>
              <View>
                <Image
                  style={styles.logos}
                  source={require('../assets/bell.png')}
                />
              </View>
            </View>
          </View>

          <View style={styles.name}>
            <View>
              <Image
                style={styles.logo}
                source={require('../assets/account1.png')}
              />
            </View>
            <View>
              <CustomText style={styles.nameText}>Pankaj Koranga</CustomText>
              <CustomText style={styles.nameTextTwo}>
                Account Details
              </CustomText>
            </View>
          </View>

         <View>
         <Section title="$2,324" id='101' subtitle="Growww Balance"/>
         <Section title="All orders" subtitle="Track orders, order details"/>
         <Section title="Bank details" subtitle="Bank & AutoPay mandates"/>
         <Section title="$Refer & Earn" id="102" subtitle="Track rewards & help friends"/>
         <Section title="Help & Support" subtitle="FAQs, contact support"/>
         <Section title="Reports" subtitle="Stocks& mutual funds reports"/>

         </View>
    
        </View>
      </SafeAreaView>
    );
  }
}

export default Profile;

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
    marginRight: 20,
  },
  logos: {
    height: 30,
    width: 30,
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

});
