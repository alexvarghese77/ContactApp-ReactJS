import React from 'react'

export default class Listing extends React.Component{
    render()
    {
        return(
            <li key={ this.props.index }>{this.props.contactDetails.name}</li>
        )
    }
}