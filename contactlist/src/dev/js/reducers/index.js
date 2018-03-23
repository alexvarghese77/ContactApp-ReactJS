import {combineReducers} from 'redux'
import contacts from './reducer-contact'

const allReducers=combineReducers({
    contacts:contacts
})

export default allReducers;

