import {combineReducers} from 'redux'
import {contacts,ContactDetail} from './reducer-contact'
import {reducer as formReducer} from 'redux-form' 
//import contactDetail from './reducer-contact-details'

const allReducers=combineReducers({
    contacts:contacts,
    ContactDetail:ContactDetail,
    form:formReducer
})

export default allReducers;

