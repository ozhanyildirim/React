import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';


export class HomeScreen extends Component {
   
   
   
    render() {
        return (
            <div >
                <h3 className="mt-5 d-flex justify-content-center">
                    Welcome to Home Page
                </h3>

                <div className="d-flex justify-content-center "> 
                <Image src="./logo512.png" fluid/>            </div>
            </div>
        )
    }
}
