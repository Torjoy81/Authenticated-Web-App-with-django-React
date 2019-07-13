import React from 'react'
import { Snackbar } from '@material-ui/core'
import { connect } from 'react-redux'
import { handleClose } from './../../action/leadAction'
import Alertmsg from './Alertmsg'


function CustomizedSnackbars(props){
  console.log(props.errors);
  
 return(
     <React.Fragment>
         <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={props.errors.open}
        autoHideDuration={6000}
        onClose={props.handleClose}
      >
        <Alertmsg
          onClose={props.handleClose}
          variant={props.errors.variant}
          message={props.errors.message}
        />
      </Snackbar>
     </React.Fragment>
 )
}

const mapStateToProps = state =>({
    errors:state.error
})

export default connect(mapStateToProps,{handleClose})(CustomizedSnackbars)