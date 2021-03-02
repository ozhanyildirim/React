import React, { Component } from 'react'
import List from './List'
import Form from './Form'
import PropTypes from 'prop-types';

class Contact extends Component {
    static propTypes={
        addContact:PropTypes.func ,
            
         contact:PropTypes.array.isRequired
    
     };
    render() {
        return (
            <div>
                <List contact={this.props.contact}/>
                <Form addContact={this.props.addContact}/>
            </div>
        )
    }
}
export default Contact;