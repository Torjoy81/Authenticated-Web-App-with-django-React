import React,{ useState } from "react";
import { connect } from "react-redux";
import { add_leads } from './../../action/leadAction'


function Add_leads(props){


    const [leads,setLeads] = useState({
        name:'',
        email:'',
        message:''
    })

    const handelChange = name => event =>{
        setLeads({...leads,[name]: event.target.value})
    }

    const handelSubmit = event =>{
      event.preventDefault();
      props.add_leads(leads)
      setLeads({
        name:'',
        email:'',
        message:''
      })
    }

    return(
        <React.Fragment>
        <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={handelSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={handelChange('name')}
              value={leads.name}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={handelChange('email')}
              value={leads.email}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={handelChange('message')}
              value={leads.message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
        </React.Fragment>
    )
}

export default connect(null,{add_leads})(Add_leads)