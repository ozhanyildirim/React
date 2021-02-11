import React, { Component } from 'react'
import "./App.css"

 class SearchBar extends Component {
        state={
            search:''
        } ;


    inputChange =event=> {
      console.log( event.target.value);
        this.setState({
            search:event.target.value
        })
    }
    
    searchClick = () => {
        console.log("tıklandı");
        this.props.onImageSearch(this.state.search);
    }

    render(){
    return (

<div className="search-bar ui input">
    <input type="text" onKeyPress={(e) => {
        if(e.key==='Enter'){
            this.searchClick();
        }
    }} onChange={this.inputChange} placeholder="Ara..."/>
    <button className="ui icon button" onClick={this.searchClick}>
    <i className="search icon"></i>
</button>
</div>
      
    );}
}
export default SearchBar; 
