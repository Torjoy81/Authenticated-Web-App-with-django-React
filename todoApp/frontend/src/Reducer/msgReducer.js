const initialState = {
    variant:'',
    open:false,
    message:''
}

const msgReducer = (state=initialState,action)=>{
    console.log(action.payload);
    
    switch (action.type) {
        case "ERROR_MSG":
            return{
                ...state,
                variant:'error',
                open:true,
                message:action.payload.error.email
            }
        case "DELETE_MSG":
            return{
                ...state,
                open:true,
                variant:'success',
                message:"Leads Successfully Delelted"
            }
        case "RESET":
            return{
                ...state,
                open:false
            }
        default:
            return state;
    }
}

export default msgReducer