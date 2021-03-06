import React from 'react'
import ContactList from '../continers/ContactList'
import ContactDetails from '../continers/ContactDetails'
import AddContact from '../continers/AddContact'

import { BrowserRouter as Router, Route} from "react-router-dom";

const AppMain=()=>{
    return(
        <Router>
            <div>
        <Route path='/' exact component={ContactList}/>
        <Route path='/contactdetail' exact component={ContactDetails}/>
        <Route path='/AddContact' exact component={AddContact}/>
        </div>
        </Router>
        )
}

export default AppMain