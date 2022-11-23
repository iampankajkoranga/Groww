import { TopGainers } from "../actions/action";



Initial_State={
    dataThree:[]

}

const dataThreeReducer = (state = Initial_State, action) => {
    const {type, payload} = action;
    console.log("dscfdsfcdsfcdsfdsrrrrrr=========>>>>>>>>>>",payload)
    switch (type) {
      case TopGainers:
          return{...state,dataThree:payload}
        //   console.log("qqqqq",dataTwo)
  
      default:
        return state;
    }
  };
  
  export default dataThreeReducer;