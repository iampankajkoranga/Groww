import {Shares} from "../actions/action";

Initial_State={
    sharesData:[]

}

const sharesReducer = (state = Initial_State, action) => {
    const {type, payload} = action;
    // console.log("dscfdsfcdsfcdsfds",payload)
    switch (type) {
      case Shares:
          return{...state,sharesData:payload}
        //   console.log("qqqqq",dataTwo)
  
      default:
        return state;
    }
  };
  
  export default sharesReducer;