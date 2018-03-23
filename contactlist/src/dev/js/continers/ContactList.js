import React from 'react';
import {Header} from '../components/Header';

import react,{Component} from 'react'
import {connect} from 'react-redux'

 class ContactList extends Component{

    renderList(){
    return this.props.contacts.map((user)=>
    {
        return (<li key={user.id}>{user.name}</li>)
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



export default connect(mapStateToProps)(ContactList);