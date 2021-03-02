import React, { Component } from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export class AddModal extends Component {
   
   constructor(props){
       super(props);
       this.state={
           snackBarOpen:false,
           snackBarMessage:'',
       }
   }

   snackbarClose =() => {
       this.setState({
           snackBarOpen:false
       })
   }


   handleSubmit = (e) =>
   {
    e.preventDefault();

       fetch('http://localhost:49881/api/user',
       {
       
       method:'POST',
       headers:
       {
           'Accept':'application/json',
           'Content-Type':'application/json'
       },
       body:JSON.stringify({
        UserID:null,
        UserName:e.target.UserName.value,
        Password:e.target.Password.value,

       })
    })
       .then(res => res.json()).then((result) =>
       {
           this.setState({
               snackBarOpen:true,
               snackBarMessage:result
           })
       },
       (error)=> 
       {
        this.setState({
            snackBarOpen:true,
            snackBarMessage:'Failed'
        })
       }
       )
      
   }

    render() {
        return (
            <div className="container">
                <Snackbar 
                anchorOrigin={{vertical:'center',horizontal:'center'}}
                open={this.state.snackBarOpen}
                autoHideDuration={2000}
                onClose={this.snackbarClose}
                message={<span id="message-id">{this.state.snackBarMessage} </span>}
               action={[
                <IconButton key="close" aria-label="close" color="inherit"
                   onClick={this.snackbarClose}>
                       x
                </IconButton>

            
               ]}
               />
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Login
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Row>
                <Col sm={6}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>
                                User Name
                            </Form.Label>
                            <Form.Control 
                            type="text" 
                            name="UserName"
                            required
                            placeholder="User Name"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control 
                            type="password" 
                            name="Password"
                            required
                            placeholder="Password"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button variant="primary" type="submit">Login</Button>
                        </Form.Group>
                        </Form>
                
                </Col>
            </Row>
             </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>   
            </div>
        )
    }
}
