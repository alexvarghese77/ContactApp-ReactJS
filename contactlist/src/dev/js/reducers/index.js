import {combineReducers} from 'redux'
import {contacts,ContactDetail} from './reducer-contact'
//import contactDetail from './reducer-contact-details'

const allReducers=combineReducers({
    contacts:contacts,
    ContactDetail:ContactDetail
})

export default allReducers;

