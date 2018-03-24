import React from 'react'
import {connect} from 'react-redux'

class ContactDetails extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div>
                    <div className="header">
                    <h1>ContactDetails </h1>
                    </div>
             <h3>
                 Name:{ this.props.contactDetail.name }
             </h3>
            </div>
        ) 
    }
}

function mapStateToProps(state) {
    return {
        contactDetail: state.contactDetail
    };
}


export default connect((mapStateToProps)(ContactDetails));