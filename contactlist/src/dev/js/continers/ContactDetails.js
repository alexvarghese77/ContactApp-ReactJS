import React from 'react'
import {connect} from 'react-redux'
import { Route, Redirect } from 'react-router'

class ContactDetails extends React.Component{
    render(){
        console.log("props:",this.props);
        if(!this.props.contactDetail)
            {
                return (
                    <Route>
                    <Redirect to="/"/>
                    </Route>
                )
            
            }
        return(
            <div align="center">
                    <div className="header">
                    <h1>ContactDetails </h1>
                    </div>
             <h3>
                 Name: { this.props.contactDetail.name }
             </h3>
             <h3>
                 Phone: { this.props.contactDetail.phone }
             </h3>
            </div>
        ) 
    }
}

function mapStateToProps(state) {
    return {
        contactDetail: state.contactDetail
    };
}


export default connect (mapStateToProps)(ContactDetails);