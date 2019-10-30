import axios from 'axios'
export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({ type: "USER_LOADING" });
  
    axios
      .get("/leads/api/auth/user", tokenConfig(getState))
      .then(res => {
        dispatch({
          type: "USER_LOADED",
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
        
      });
  };
  
  // LOGIN USER
  export const login = (username, password) => dispatch => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    // Request Body
    const body = JSON.stringify({ username, password });
  
    axios
      .post("/leads/api/auth/login", body, config)
      .then(res => {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
        
      });
  };
  
  // REGISTER USER
  export const register = ({ username, password, email }) => dispatch => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    // Request Body
    const body = JSON.stringify({ username, email, password });
  
    axios
      .post("/leads/api/auth/register", body, config)
      .then(res => {
        dispatch({
          type: "REGISTER_SUCCESS",
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
        
      });
  };
  
  // LOGOUT USER
  export const logout = () => (dispatch, getState) => {
    axios
      .post("/leads/api/auth/logout/", null, tokenConfig(getState))
      .then(res => {
        dispatch({ type: 'CLEAR_LEADS' });
        dispatch({
          type: "LOGOUT_SUCCESS"
        });
      })
      .catch(err => {
       console.log(err);
       
      });
  };
  
  // Setup config with token - helper function
  export const tokenConfig = getState => {
    // Get token from state
    const token = getState().auth.token;
  
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    // If token, add to headers config
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
  
    return config;
  };