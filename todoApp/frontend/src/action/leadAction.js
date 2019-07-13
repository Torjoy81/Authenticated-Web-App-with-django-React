import axios from 'axios'
import { tokenConfig } from "./authAction";

export const getLeads = () => (dispatch,getState) =>{
    dispatch(fetchProductsBegin())
    axios.get("/leads/api/lead/",tokenConfig(getState))
    .then(res=>dispatch(fetchProductsSuccess(res.data)))
    .catch(err=>console.log("eRROR:",err));
    
}

export const deleteLeads=(id)=>(dispatch,getState)=>{
  axios.delete(`/leads/api/lead/${id}/`,tokenConfig(getState))
  .then(res=>dispatch(getDelete(id)))
  .then(()=>{
    dispatch({type:"DELETE_MSG"})
    setTimeout(()=>{
      dispatch(error_reset())
    },6000)
  })
  .catch(err=>console.log("Error:",err));
  
}

export const add_leads=leads=>(dispatch,getState)=>{
  axios.post('/leads/api/lead/',leads,tokenConfig(getState))
  .then((res)=>{
    dispatch(postLeads(res.data))
  })
  .catch(err=>dispatch(getError(err.response.data)))
  .then(()=>{
    setTimeout(()=>{
      dispatch(error_reset())
    },6000)
  });
  
}

export const handleClose=(event,reason)=>dispatch=>{
  if (reason === 'clickaway') {
    return;
  }
  dispatch(error_reset())
}


export const fetchProductsBegin = () => ({
    type: "FETCH_BEGIN"
  });
  
  export const fetchProductsSuccess = data => ({
    type: "FETCH_SUCCESS",
    payload: { data }
  });
  
  export const fetchProductsFailure = error => ({
    type: "FETCH_FAILURE",
    payload: { error }
  });

  const getDelete = (id) =>({
    type:"DELETE_LEADS",
    payload:id
  })

  const postLeads = (data) =>({
    type:"ADD_LEADS",
    payload:data
  })

  
  const getError=(error)=>({
    type:'ERROR_MSG',
    payload:{error}
  })

  const error_reset=()=>({
    type:'RESET'
  })