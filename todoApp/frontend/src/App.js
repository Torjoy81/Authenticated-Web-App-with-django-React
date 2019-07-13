import React,{ useEffect } from 'react'
import TabelArrange from "./components/layout/Tabel";
import Add_leads from './components/layout/From'
import CustomizedSnackbars from './components/layout/Snackbar'
import SignIn from './components/Auth/Login'
import SignUp from './components/Auth/Register'
import { connect } from 'react-redux'
import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom";
import Header from './components/layout/Header'
import { loadUser } from './action/authAction'
import store from './store'

function App(props){


  useEffect(()=>{
    store.dispatch(loadUser())
  },[])
    
    return(
        <BrowserRouter>
            <Header />
            <Switch>
            <PrivateRoute exact path='/' component={DashBoard} auth={props.auth} open={props.open}/>
            <Route path='/login' component={SignIn} />
            <Route path='/register' component={SignUp} />
            </Switch>
        </BrowserRouter>
        
    )
}

const PrivateRoute = ({ component: Component, auth, open, ...rest }) => (
    <Route
      {...rest}
      render={props => {
        if (auth.isLoading) {
          return <h2>Loading...</h2>;
        } else if (!auth.isAuthenticated) {
          return <Redirect to="/login" />;
        } else {
          return <Component {...props} open={open} />;
        }
      }}
    />
  );


  function DashBoard(props) {
      return (
        <div>
        <Add_leads />
       <TabelArrange />
       {props.open&&<CustomizedSnackbars />}
   </div>
      )
  }

const mapStateToProps = state =>({
    open:state.error.open,
    auth: state.auth
})
export default connect(mapStateToProps)(App)