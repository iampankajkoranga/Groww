import {Text, View, FlatList, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import {getShares} from '../redux/actions/action';
import {connect} from 'react-redux';
import CustomText from '../components/CustomText';

export class Shares extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const{getIndices}=this.props
    // getIndices();
    this.props.getShares();
  }
  render() {
    const {sharesData} = this.props.sharesData;
    // console.log("qwerty11111111",dataThree)
    return (
      <FlatList
        // horizontal
        data={sharesData}
        renderItem={({item}) => {
          console.log('1111111122222222222=>', item.name);
          console.log('22222222222=>', item.currPrice - item.previousPrice);
          return (
            <View style={styles.mainContainer}>
              <View style={styles.detailsOne}>
                <CustomText style={styles.name}>{item.name}</CustomText>
                <CustomText style={styles.sharesText}>{item.shares} shares</CustomText>
              </View>
              <View style={styles.detailsTwo}>
                <CustomText style={styles.value}> ₹{item.currValue} </CustomText>
                <CustomText> (₹{item.currPrice})</CustomText>
              </View>
            </View>
          );
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    sharesData: state.sharesReducer,
  };
};

const mapDispatchToProps = {
  getShares,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shares);

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:10,
        height:80,
        borderBottomWidth:1,
        borderColor:"grey",
        marginTop:10
        // padding:5

    },
    detailsOne:{
        justifyContent:"space-evenly",
    
    },
    detailsTwo:{
        justifyContent:"space-evenly",
    
    },
    name:{
        fontSize:15,
        fontWeight:"500"
    },
    sharesText:{
        color:"lightgrey"
    },
    value:{
        color:"rgb(89,189,144)",
        fontSize:15,
        fontWeight:"700"
    }

});
