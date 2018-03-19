import React from 'react';
import {ContactDetails} from '../MockData/ContactListDetails.json';
import './../App.css';




export default class ContactList extends React.Component{
    render()
    {
        return (
            <ul >
              {ContactDetails.map((item,index) =><li key={ index }>{item.name}</li> )}
            </ul>
        )
    }
}