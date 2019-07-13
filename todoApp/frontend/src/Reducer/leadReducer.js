const initialState = {
    data:[],
    loading:false
}

const leadReducer = (state=initialState,action)=>{
    
    switch (action.type) {
        case "FETCH_BEGIN":
            return {
                ...state,
                loading:true,
            }
        case "FETCH_SUCCESS":
            return{
                ...state,
                loading:false,
                data:action.payload.data
            }
        case "DELETE_LEADS":
            return{
                ...state,
                loading:false,
                data:state.data.filter(value=>value.id !== action.payload)
            }
        case "ADD_LEADS":
            return{
                ...state,
                loading:false,
                data:[...state.data,action.payload]
            }
        default:
            console.log(state);
            return state;
        
    }
    
    
}

export default leadReducer