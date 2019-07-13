import React, { useEffect,useState } from 'react'
import { Table,Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getLeads, deleteLeads } from "./../../action/leadAction";
import PropTypes from "prop-types";
function TabelArrange(props) {
    TabelArrange.propTypes = {
        leads:PropTypes.array.isRequired
    }
    useEffect(()=>{
        props.getLeads()
    },[])

    const {leads} = props
    
    return (
        <React.Fragment>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>                    
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       leads && leads.map(value => (
                            <tr key={value.id}>
                                <th>{value.id}</th>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                <td>{value.message}</td>
                                <td><Button onClick={()=>props.deleteLeads(value.id)} variant="danger">Delete</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </React.Fragment>
    );
}

const mapStateToProps = state =>({
    leads:state.lead.data
})
export default connect(mapStateToProps,{getLeads,deleteLeads})(TabelArrange)