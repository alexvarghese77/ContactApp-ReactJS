import React from 'react';
import react,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap';

import {ContactDetail} from '../actions/index'
import {Header} from '../components/Header';

 class ContactList extends Component{

    renderList(){
        console.log("//////////////////",this.props)
    return this.props.contacts.map((user)=>
    {
     return (<Link to='/contactdetail' key={user.id}><ListGroupItem key={user.id} tag="a" onClick={()=>this.props.ContactDetail(user)}>{user.fname +" "+user.lname }</ListGroupItem></Link>)
     //return (<Link to='/contactdetail' key={user.id}><ListGroupItem key={user.id} onClick={()=>this.props.ContactDetail(user)}>{user.name}</ListGroupItem></Link>)
    }
    )
    }


    render()
    {
        console.log("props",this.props)
        return (
            <div>
            <Header/>
            <ListGroup>
                {this.renderList()}
            </ListGroup>
  

            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        contacts: state.contacts,
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({ContactDetail: ContactDetail}, dispatch);
}



export default connect(mapStateToProps,matchDispatchToProps)(ContactList);