import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Users from './Users'
import Posts from './Posts'
class App extends Component {


  state={
    users:[],
    posts:[],
    isLoading:true,
  }


componentDidMount(){
  setTimeout(()=>
  {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(data => data.json()).then(ozhan =>{
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(ozhan => ozhan.data).then(ozhan =>{
      // console.log(ozhan);
      this.setState({
    
          users:ozhan,
          isLoading:false
      });
    
    
    })
  },1000)
 
  setTimeout(()=>
  {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(data => data.json()).then(ozhan =>{
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(ozhann => ozhann.data).then(ozhann =>{
      // console.log(ozhan);
      this.setState({
    
          posts:ozhann,
          isLoading:false
      });
    
    })
  },2000)
 


}

  render() {
    return (
      
      <div className="">
        <h1>POSTS AND USERS</h1>
        <Users {...this.state}/>
        <Posts {...this.state}/>
         </div>
    )
  }
}
export default App;