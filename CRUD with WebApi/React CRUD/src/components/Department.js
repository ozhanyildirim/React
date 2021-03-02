import React, { Component } from 'react';
import {Table, Button,ButtonToolbar} from 'react-bootstrap';
import {AddModal} from './AddModal';
import {EditModal} from './EditModal';

export class Department extends Component {
    
    constructor(props) {
        super(props);
        this.state=
        {
            deps:[],
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
        fetch('http://localhost:49881/api/Department').then((response) =>{
            return response.json();
        }).then((data) => {
            this.setState({
                deps:data
            })
        });

        }

    showModal = () =>
    {
        this.setState({
            modalShow:true
        })
    }


    deleteDep(depid){
        if(window.confirm('Are You Sure ?')){
            fetch('http://localhost:49881/api/Department/'+depid,
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

        const{deps,depid,depname}=this.state;
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
        <th>Department ID </th> 
        <th>Department Name</th>
        <th>Option</th>

      </tr>
    </thead>
    <tbody>
        {  deps.map(dep=>
         <tr key={dep.DepartmentID}>
        <td>{dep.DepartmentID}</td>
        <td>{dep.DepartmentName}</td>
        <td><ButtonToolbar>
    <Button variant="warning" onClick={() => this.setState({

        editModalShow:true,
        depid:dep.DepartmentID,
        depname:dep.DepartmentName,
            })}>
                Edit
            </Button>

            <Button variant="danger" className="ml-3"
            onClick={()=> this.deleteDep(dep.DepartmentID)}
            >
                Delete
            </Button>

            </ButtonToolbar>
            <EditModal
            show={this.state.editModalShow}
            onHide={editCloseModal}
            depid={depid}
            depname={depname}
            />
            
            </td>

        
      </tr>
          )
          } 
    </tbody>
  </Table>
  <ButtonToolbar>
      <Button onClick={this.showModal}>Add Department</Button>
  </ButtonToolbar>
  <AddModal show={this.state.modalShow} onHide={closeModal}/> 
  </div>
        )
    }
}
