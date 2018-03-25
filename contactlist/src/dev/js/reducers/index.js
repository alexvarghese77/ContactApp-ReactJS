import {combineReducers} from 'redux'
import contacts from './reducer-contact'
import contactDetail from './reducer-contact-details'

const allReducers=combineReducers({
    contacts:contacts,
    contactDetail:contactDetail
    
})

export default allReducers;

