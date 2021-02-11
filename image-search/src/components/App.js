import React, { Component } from 'react'
import SearchBar from './SearchBar'
import "./App.css"
import axios from 'axios'
import List from './List'

class App extends Component {
state= {
  images:[]
};



onImageSearch = async(search) =>
{
  console.log('App ' + search);
 const result = await axios.get('https://api.unsplash.com/search/photos',{
    params:{
      query : search,
      per_page : 30
    },
    headers:{
      Authorization : 'Client-ID AId0SX6ZLUgHxViLpDYUoxAD5XOFMMA_Oouwx5Omh2s'
    }
  })
  this.setState({
    images:result.data.results
  });
}



  render(){
return (
  <div className="app-container">



<h1><i class="image outline icon"></i> RESİM TARAMA PROGRAMI </h1>
    <SearchBar onImageSearch={this.onImageSearch}/> 
    
    <List images={this.state.images}/>
  </div>

)}};

export default App;