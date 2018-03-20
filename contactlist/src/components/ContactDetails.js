import React from 'react'
import './../App.css';
import {ContactDetail} from '../MockData/ContactListDetails.json';
export default class ContactDetails extends React.Component{
   
    render(){
        console.log(this.props.match.params.id);
        return(
            <div>
                    <div className="header">
                    <h1>ContactDetails</h1>
                    </div>
             <h3>
                 Name:{ ContactDetail[this.props.match.params.id].name }
             </h3>
            </div>
        )
    }
}