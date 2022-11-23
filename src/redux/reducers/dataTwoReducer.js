import {MostBought} from "../actions/action";

Initial_State={
    dataTwo:[]

}

const dataTwoReducer = (state = Initial_State, action) => {
    const {type, payload} = action;
    // console.log("dscfdsfcdsfcdsfds",payload)
    switch (type) {
      case MostBought:
          return{...state,dataTwo:payload}
        //   console.log("qqqqq",dataTwo)
  
      default:
        return state;
    }
  };
  
  export default dataTwoReducer;