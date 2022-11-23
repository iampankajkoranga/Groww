import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import CustomText from '../components/CustomText';
import IndicesData from '../components/IndicesData';
import {getIndices} from '../redux/actions/action';
import {connect} from 'react-redux';
import MostBought from '../components/MostBought';
import Futures from '../components/Futures';
import TopGainers from '../components/TopGainers';
import Dashboard from './Dashboard';
class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'Explore',
    };
  }

  componentDidMount() {
    // const{getIndices}=this.props
    // getIndices();
    this.props.getIndices();
  }
  render() {
    const {data} = this.props.data;
    // console.log("okr",data);
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content"></StatusBar>
        <View>
          <View style={styles.header}>
            <View>
              <Image
                style={styles.headerLogo}
                source={require('../assets/groww.png')}
              />
            </View>
            <View style={styles.search}>
              <Image
                style={styles.headerSearch}
                source={require('../assets/whitesearch.png')}
              />
              <TextInput
                placeholder="Search Groww"
                placeholderTextColor="white"
              />
            </View>
            <View>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Profile")}>
              <Image
                style={styles.headerLogo}
                source={require('../assets/account1.png')}
              />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.explore}>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  active: 'Explore',
                })
              }
              style={
                this.state.active === 'Explore'
                  ? {
                      borderBottomColor: 'rgb(82,170,135)',
                      borderWidth: 2,
                      width: '50%',

                      alignItems: 'center',
                    }
                  : {width: '50%', alignItems: 'center'}
              }>
              <CustomText
                style={
                  this.state.active === 'Explore'
                    ? {color: 'rgb(82,170,135)', fontSize: 16, fontWeight: '600'}
                    : {color: 'white', fontSize: 16, fontWeight: '600'}
                }>
                Explore
              </CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                this.state.active === 'Dash'
                  ? {
                      borderBottomColor: 'rgb(82,170,135)',
                      borderWidth: 2,
                      fontSize: 16,
                      color: 'rgb(82,170,135)',
                      fontWeight: '600',
                      width: '50%',
                      // textAlign: 'center',
                      alignItems: 'center',
                      // backgroundColor:"red",
                      marginHorizontal: 10,
                    }
                  : {textAlign: 'center', alignItems: 'center', width: '50%'}
              }
              onPress={() =>
                this.setState({
                  active: 'Dash',
                })
              }>
              <CustomText
                style={
                  this.state.active === 'Dash'
                    ? {color: 'rgb(82,170,135)', fontSize: 16, fontWeight: '600'}
                    : {color: 'white', fontSize: 16, fontWeight: '600'}
                }>
                Dashboard
              </CustomText>
            </TouchableOpacity>
          </View>

          {this.state.active === 'Explore' ? (
            <ScrollView>
              <View>
                <View style={styles.money}>
                  {/* <TextColor style={styles.textone}>
                hello
              </TextColor> */}
                  <View style={styles.balance}>
                    <CustomText>Balance Available for Stocks</CustomText>
                    <CustomText style={styles.priceText}>₹56,899</CustomText>
                  </View>
                  <View style={styles.addMoney}>
                    <CustomText style={styles.addText}>ADD MONEY</CustomText>
                  </View>
                </View>
              </View>

              <View>
                <View style={styles.marketIndices}>
                  <View style={styles.indicesHeader}>
                    <CustomText style={styles.indicesText}>
                      Market indices
                    </CustomText>
                    <View style={styles.allStocks}>
                      <CustomText style={styles.indicesTextTwo}>
                        ALL STOCKS
                      </CustomText>
                    </View>
                  </View>
                  <IndicesData />
                  <View style={styles.mostBoughtHeder}>
                    <CustomText style={styles.mostBoughtText}>
                      Most Boughts on Groww
                    </CustomText>
                  </View>
                  <View>
                    <MostBought />
                  </View>

                  <View style={styles.futures}>
                    <Futures name="F&O" />
                    <Futures name="Intraday" />
                  </View>

                  <View style={styles.top}>
                    <CustomText style={styles.topText}>Top gainers</CustomText>
                    <CustomText style={styles.textTwo}>See More</CustomText>

                  </View>

                  <View>
                    <TopGainers />
                  </View>
                  <View style={styles.empty}></View>
                </View>
              </View>
            </ScrollView>
          ) : (
            <ScrollView>
              <View>
                <Dashboard />
              </View>
            </ScrollView>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.dataReducer,
  };
};

const mapDispatchToProps = {
  getIndices,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
// export default HomePage

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerLogo: {
    height: 35,
    width: 35,
    // marginTop:8
  },
  headerSearch: {
    marginTop: 8,
    height: 20,
    width: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 30,
    marginHorizontal: 10,
    backgroundColor: 'black',
    borderColor: 'grey',
    padding: 10,
    marginBottom: 20,
  },
  search: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 150,
  },
  money: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(29,29,29)',
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 15,
    marginTop:20
  },
  addText: {
    // marginTop: 8,
    fontSize: 13,
    padding: 10,
    marginHorizontal: 10,
    fontWeight:"700",
    // borderWidth:1,
    borderRadius: 20,
    justifyContent: 'center',
    // height:50
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  balance: {
    justifyContent: 'space-between',
    // backgroundColor:"red",
    height: 50,
  },
  indicesText: {
    fontSize: 18,
    fontWeight: '700',
  },
  indicesTextTwo: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgb(80,175,130)',
    marginHorizontal: 6,

    padding: 4,
    // borderRadius:100
  },
  indicesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 15,
  },
  marketIndices: {
    marginTop: 20,
  },
  addMoney: {
    backgroundColor: 'rgb(84,183,147)',
    borderRadius: 10,
    height: 36,
    marginTop: 8,
  },
  allStocks: {
    backgroundColor: 'rgb(19,34,30)',
    borderRadius: 10,
  },
  mostBoughtHeder: {
    marginTop: 33,
    marginBottom: 15,
    marginHorizontal: 10,
  },
  mostBoughtText: {
    fontSize: 18,
    fontWeight: '700',
  },
  futures: {
    marginTop: 33,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  explore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems:'center',
    // textAlign:'center',
    marginHorizontal: 10,
  },
  // dash: {
  //   // textAlign:"center",
  //   // alignItems:"center",
  //   marginRight: 50,
  //   fontWeight: '600',
  //   fontSize:15,
  //   color:"green"
  //   // color:"green",
  //   // backgroundColor:"red",
  // },
  empty: {
    height: 150,
  },
  top:{
    marginHorizontal:10,
    marginBottom: 15,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  topText:{
    fontSize: 18,
    fontWeight: '700',


  },
  textTwo:{
    color:"rgb(89,189,144)",
    fontSize:15,
    fontWeight:"600",
    marginTop:5
  }
});
