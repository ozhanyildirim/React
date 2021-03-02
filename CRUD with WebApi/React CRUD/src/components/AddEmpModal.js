import React, { Component } from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export class AddEmpModal extends Component {
   
   constructor(props){
       super(props);
       this.state={
           deps:[],
           snackBarOpen:false,
           snackBarMessage:'',
       }
   }

   snackbarClose =() => {
       this.setState({
           snackBarOpen:false
       })
   }

   componentDidMount() {
       fetch('http://localhost:49881/api/department').then(response => response.json())
       .then(data => 
        {
            this.setState({
                deps:data
            });
        })
   }
   
   handleSubmit = (e) =>
   {
    e.preventDefault();

       fetch('http://localhost:49881/api/employee',
       {
       
       method:'POST',
       headers:
       {
           'Accept':'application/json',
           'Content-Type':'application/json'
       },
       body:JSON.stringify({
        EmployeeID:null,
        EmployeeName:e.target.EmployeeName.value,
        Department:e.target.Department.value,
        MailID:e.target.MailID.value,
        DOJ:e.target.DOJ.value,
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
                Add Employee
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Row>
                <Col sm={6}>
    <Form onSubmit={this.handleSubmit}>
<Form.Group controlId="EmployeeName">
   <Form.Label>
          Name Surname
       </Form.Label>
       <Form.Control 
        type="text" 
        name="EmployeeName"
             required
                placeholder="Name Surname"
                />
</Form.Group>

<Form.Group controlId="Department"> 
<Form.Label>
Department Name
</Form.Label>
<Form.Control 
as="select">
{this.state.deps.map(dep =>
<option key={dep.DepartmentID} >
{dep.DepartmentName}
</option>
)}
</Form.Control>
</Form.Group>
 <Form.Group controlId="MailID">
  <Form.Label>
     Mail Adress
   </Form.Label>
 <Form.Control 
     type="text" 
         name="MailID"
          required
             placeholder="Mail"
/> </Form.Group>
      <Form.Group controlId="DOJ">
      <Form.Label>
Date of Join
</Form.Label>
        <Form.Control 
       type="date" 
        name="DOJ"
        required
        placeholder="Date of Join"
 />
</Form.Group>
                        <Form.Group>
                            <Button variant="primary" type="submit">Add</Button>
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
