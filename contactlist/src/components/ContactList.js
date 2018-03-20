import React from 'react';
import {ContactDetail} from '../MockData/ContactListDetails.json';
import './../App.css';
import {Link } from 'react-router-dom'



export default class ContactList extends React.Component{
    render()
    {
        return (
            <ul >
              {ContactDetail.map((item,index) =>{

                 return  <Link to={`/contactdetails/${index}`} style={{textDecoration :'none'}} key={index}><li key={ index }>{item.name}</li></Link>
                  
                  } )}
            </ul>
        )
    }
}