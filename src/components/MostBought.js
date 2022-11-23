import { Text, View,FlatList,StyleSheet,Image } from 'react-native'
import React, { Component } from 'react'
import { getMostBought } from '../redux/actions/action'
import {connect} from 'react-redux';
import CustomText from '../components/CustomText';

export class MostBought extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    // const{getIndices}=this.props
    // getIndices();
    this.props.getMostBought();
  }
  render() {
    const {dataTwo}=this.props.dataTwo
    console.log("qwerty",dataTwo)
    return (
  <FlatList
        horizontal
          data={dataTwo}
          renderItem={({item}) => {
            // console.log("1111111122222222222=>",item.name);
            // console.log('22222222222=>', item.currPrice - item.previousPrice);
            return (
              <View style={styles.container}>
                <View>
                  <Image style={styles.logo} source={{uri:item.imageUrl}}/>
                  <CustomText style={styles.textLogo}>{item.name}</CustomText>
                </View>
                <View>
                  <CustomText style={styles.price}>{item.currPrice}</CustomText>
                  {item.currPrice<item.previousPrice? <CustomText style={styles.growth}>
                    {parseInt(item.currPrice) - parseInt(item.previousPrice)} ({(((parseInt(item.currPrice) - parseInt(item.previousPrice))/item.previousPrice)*100).toFixed(2)}%)
                      
                  </CustomText>:<CustomText style={styles.growthPlus}>
                    +{parseInt(item.currPrice) - parseInt(item.previousPrice)} (+{(((parseInt(item.currPrice) - parseInt(item.previousPrice))/item.previousPrice)*100).toFixed(2)}%)
                      
                  </CustomText>
                  }

                </View>

              </View>

          
            );
          }}
        />
    )
  }
}


const mapStateToProps = state => {
  return {
    dataTwo: state.dataTwoReducer,
  };
};

const mapDispatchToProps = {
  getMostBought,

};

export default connect(mapStateToProps, mapDispatchToProps)(MostBought);

const styles=StyleSheet.create({
  logo:{
    height:30,
    width:30
  },
  growthPlus:{
    color:"rgb(89,189,144)",
    fontWeight:"500"
  },
  growth:{
    color:"rgb(299,89,71)",
    fontWeight:"500"
  },
  price:{
    fontWeight:"700",
    marginBottom:4

  },
  container:{
    backgroundColor:"rgb(29,29,29)",
    padding:13,
    borderRadius:10,
    width:150,
    height:140,
    justifyContent:"space-between",
    marginHorizontal:10

  },
  textLogo:{
    fontWeight:"600",
    marginTop:5
  }


})