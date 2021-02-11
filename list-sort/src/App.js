import './App.css';
import Contact from './Contact';
import React , {Component} from 'react'
class App extends Component {
constructor(props){
  super(props);
  this.addContact=this.addContact.bind(this);
}
  state={
    contact : [{
      name:'Özhan Yıldırım',
      phone:'0555 720 13 35'
    },
   {
    name:'Furkan Kayıkcı',
    phone:'0537 684 48 31'
  },
  {
    name:'Ahmet Çolakgil',
    phone:'0553 743 05 05'
  },
  ]
  }

  addContact(contacts)
  {
    console.log(contacts);
  const{contact}=this.state;
  contact.push(contacts);

  this.setState(
    {
    contacts:contact

  });

}


  render(){
  return (
      <div className="App">
        <Contact addContact={this.addContact} contact={this.state.contact}/>
      </div>
   
  );}
}

export default App;
