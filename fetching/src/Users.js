import React, { Component } from 'react'
import LoaderHoc from './LoaderHoc'

 class Users extends Component {


    
    render() {
        return (
            <div>
                {
                this.props.isLoading ? <div>Loading...</div>
                : this.props.users.map(user =>
              <div key={user.id}>    <br/>   <hr></hr> <br/>
                {user.name}
         
                </div>
                )}
            </div>
        );
    }
}
export default LoaderHoc(Users);