import {combineReducers} from 'redux'
import {contacts,contactDetails} from './reducer-contact'
//import contactDetail from './reducer-contact-details'

const allReducers=combineReducers({
    contacts:contacts,
    contactDetail:contactDetails
    
})

export default allReducers;

