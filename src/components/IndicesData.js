import {Text, View, FlatList, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import CustomText from '../components/CustomText';

import {getIndices} from '../redux/actions/action';
import {connect} from 'react-redux';

export class IndicesData extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const{getIndices}=this.props
    // getIndices();
    this.props.getIndices();
  }
  render() {
    const {data} = this.props.data;
    // console.log(data);
    return (
      <View style={styles.indices}>
        <FlatList
        horizontal
          data={data}
          renderItem={({item}) => {
            // console.log(item.name);
            // console.log('okkkkoookkkk', item.currPrice - item.previousPrice);
            return (

              <View style={styles.indices1}>
                <View>
                  <CustomText style={styles.stockName}>{item.name}</CustomText>
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
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(IndicesData);

const styles = StyleSheet.create({
  indices: {
    flexDirection:"row",
  },
  stockName:{
    fontWeight:"bold"

  },
  price:{
    fontWeight:"700",
    marginBottom:3

  },
  growth:{
    color:"rgb(299,89,71)",
    fontWeight:"500"

  },
  growthPlus:{
    color:"rgb(89,189,144)",
    fontWeight:"500"

  },

  indices1:{
    // flexDirection:"row",
    padding:13,
    borderRadius:10,
    width:150,
    height:110,
    backgroundColor:"rgb(29,29,29)",
    justifyContent:"space-between",
    marginHorizontal:10
  }
});
