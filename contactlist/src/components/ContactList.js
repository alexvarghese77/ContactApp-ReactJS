import React from 'react';
import {ContactDetail} from '../MockData/ContactListDetails.json';
import {Header} from './Header';
import Listing from './ContactListing'
import './../App.css';
import {Link } from 'react-router-dom'



export default class ContactList extends React.Component{
    render()
    {
        return (
            <div>
            <Header/>
            <ul >
              {ContactDetail.map((item,index) =>{

                 return  <Link to={`/contactdetails/${index}`} style={{textDecoration :'none'}} key={index}>
                           <Listing contactDetails={item} index={this.index}></Listing>
                 </Link>
                  
                  } )}
            </ul>
            </div>
        )
    }
}