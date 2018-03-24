import React from 'react';
import react,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'

import {ContactDetail} from '../actions/index'
import {Header} from '../components/Header';

 class ContactList extends Component{

    renderList(){
    return this.props.contacts.map((user)=>
    {
        return (<Link to='/contactdetail' key={user.id}><li key={user.id} onClick={()=>this.props.ContactDetail(user)}>{user.name}</li></Link>)
    }
    )
    }


    render()
    {
        console.log("props",this.props)
        return (
            <div>
            <Header/>
            <ul>
                {this.renderList()}
            </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        contacts: state.contacts
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({ContactDetail: ContactDetail}, dispatch);
}



export default connect(mapStateToProps,matchDispatchToProps)(ContactList);