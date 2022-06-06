import { actionTypes } from "./action";

const initState = {
    data:[],
    isLoading:false,
    isError:false
};

function reducer(state = initState, action) {
 switch(action.type){
    case actionTypes.ADD_USER_REQUEST:{
        return{
            ...state,
            isLoading:true,
            isError:false
        }
    } 
     case actionTypes.ADD_USER_SUCCESS:{
         return{
             ...state,
             isLoading:true,
             data:action.data,
             isError:false
         }
     }
    case actionTypes.ADD_USER_FAILURE:{
        return{
            ...state,
            isLoading:false,
            isError:true
        }
    }
    default:{
        return {state}
    }
 }
}

export default reducer;
