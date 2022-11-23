import { IndicesData } from "../actions/action";

Initial_State={
    data:[]

}

const dataReducer = (state = Initial_State, action) => {
    const {type, payload} = action;
    // console.log("data1",payload)
    switch (type) {
      case IndicesData:
          return{...state,data:payload}
  
      default:
        return state;
    }
  };
  
  export default dataReducer;