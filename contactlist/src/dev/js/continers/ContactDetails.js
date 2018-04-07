import React from 'react'
import {connect} from 'react-redux'
import { Route, Redirect} from 'react-router'
import {bindActionCreators} from 'redux'
import {Link} from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


import {DeleteContact} from '../actions/index'

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
                {/* <h3>
                    Name: { this.props.contactDetail.name }
                </h3>
                <h3>
                    Phone: { this.props.contactDetail.phone }
                </h3> */}
           
           
            <Row>
           <Col sm={{ size: 8, offset: 2 }}>
           <Card body>
          <CardTitle>{this.props.contactDetail.fname +" "+this.props.contactDetail.lname }</CardTitle>
          <CardText> Phone: { this.props.contactDetail.phone }</CardText>
          <Link to="/"> <Button onClick={()=>this.props.DeleteContact(this.props.contactDetail.id)}>Delete</Button></Link>

          </Card>
      </Col>
      </Row>
           
           
           
            </div>
        ) 
    }
}

function mapStateToProps(state) {

    console.log("State",state)
    return {
        contactDetail: state.ContactDetail,
        contacts: state.contacts
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({DeleteContact: DeleteContact}, dispatch);
}


export default connect (mapStateToProps,matchDispatchToProps)(ContactDetails);