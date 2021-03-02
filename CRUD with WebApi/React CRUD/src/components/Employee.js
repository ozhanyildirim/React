import React, { Component } from 'react';
import {Table, Button,ButtonToolbar} from 'react-bootstrap';
import {AddEmpModal} from './AddEmpModal';
import {EditEmpModal} from './EditEmpModal';

export class Employee extends Component {

     
    constructor(props) {
        super(props);
        this.state=
        {
            emps:[],
            modalShow:false,
            editModalShow:false,
        }
    }
    componentDidMount() {
        this.refleshlist();
    }
    componentDidUpdate(){
        this.refleshlist();
    }
    
    refleshlist()
    {
       fetch('http://localhost:49881/api/Employee').then((response) =>{
           return response.json();
       }).then((data) => {
           this.setState({
               emps:data
           })
       });

       }

   showModal = () =>
   {
       this.setState({
           modalShow:true
       })
   }


   deleteEmp(empid){
       if(window.confirm('Are You Sure ?')){
           fetch('http://localhost:49881/api/Employee/'+empid,
           {
           method:'DELETE',
          headers:
          {
              'Accept':'application/json',
              'Content-Type':'application/json'
          }
       }
       )
       }
      

   }
   
    render() {
        const{emps,empid,empname}=this.state;
        let closeModal = () => {
            this.setState({
                modalShow:false
            })
        }
        let editCloseModal = () => {
            this.setState({
                editModalShow:false
            })
        }
        return (
          
            <div>
            <Table striped bordered hover size="sm" >
                <thead>
                  <tr>
                    <th>Employee ID </th> 
                    <th>Name Surname</th>
                    <th>Department</th>
                    <th>Mail Adress</th>
                    <th>Date Of Join</th>
                    <th>Option</th>
            
                  </tr>
                </thead>
                <tbody>
                    {  emps.map(emp=>
                    <tr key={emp.EmployeeID}>
                    <td>{emp.EmployeeID}</td>
                    <td>{emp.EmployeeName}</td>
                    <td>{emp.Department}</td>
                    <td>{emp.MailID}</td> 
                    <td>{emp.DOJ}</td>

                    <td><ButtonToolbar>
                <Button variant="warning" onClick={() => this.setState({
            
                    editModalShow:true,
                    empid:emp.EmployeeID,
                    empname:emp.EmployeeName,
                        })}>
                            Edit
                        </Button>
            
                        <Button variant="danger" className="ml-3"
                        onClick={()=> this.deleteEmp(emp.EmployeeID)}
                        >
                            Delete
                        </Button>
            
                        </ButtonToolbar>
                        <EditEmpModal
                        show={this.state.editModalShow}
                        onHide={editCloseModal}
                        empid={empid}
                        empname={empname}
                        />
                        
                        </td>
     
                  </tr>
                      )
                      } 
                </tbody>
              </Table>
              <ButtonToolbar>
                  <Button onClick={this.showModal}>Add Employee</Button>
              </ButtonToolbar>
              <AddEmpModal show={this.state.modalShow} onHide={closeModal}/> 
              </div>
            
        )
    }
}
