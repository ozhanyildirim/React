import './App.css';
import {BrowserRouter as Router,Route,Link,NavLink, Redirect,Switch} from 'react-router-dom'
import { Component } from 'react';



const news = ({match}) => {
  return(<h1>Yeni Sayfa id : {match.params.id}</h1>)
}

const Profile = () => {
  return(<h1>Profil Sayfası</h1>)
}

const Error = () => {
  return(<h1>404 PAGE NOT FOUND</h1>)
}

class App extends Component {

  state={
    loggedIn:false
  };

  clickButton = () => {
    this.setState(prevstate => ({
      loggedIn:!prevstate.loggedIn
    }))
  };

 render(){
  return (
    <Router>
    <div className="App">
   <NavLink  activeClassName="osi" to="/">ANA SAYFA</NavLink>  
 
 <Link  to="/iletisim">İLETİŞİM</Link> 
   <NavLink activeClassName="osi" to="/news/3">NEWS</NavLink>
       <NavLink activeClassName="osi" to="/profile">PROFIL</NavLink>

    <br/><br/>

    <input type="button" onClick={this.clickButton} value={this.state.loggedIn ? 'LOG OUT ' : 'LOG IN'}/>
<Switch> 
 <Route  path="/" exact render={
      () => {
        return (<h1>ANA SAYFA</h1>)
      }
    }/>

<Route path="/iletisim" exact strict render={
      () => {
        return (<h1>iletisim</h1>)
      }
    }/>
   
   <Route  path="/news/:id" exact strict
   component={news}
   />
      <Route  path="/profile" exact strict
    render={ () => (
    this.state.loggedIn ? (<Profile/>) : (<Redirect to="/"/>)
    )}
  /> 
  <Route  component={Error}/>
  </Switch>
    </div>
    </Router>
  );}
}

export default App;