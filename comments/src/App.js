import React from 'react';
import Comment from './Comment';
import faker from "faker";
import Card from './Card';

 const App = () => {
  return (
  <div className="ui comments" style={{
    paddingTop : '10px', paddingLeft: '15px'
  }}>
      <Card> 
      <Comment name = "Özhan Yıldırım" timeAgo="2" star="5" comment="React comment 1" avatar={faker.image.avatar()}/>
      <Comment name = "Nuri Yıldırım" timeAgo="1" star="4" comment="React comment 2" avatar={faker.image.avatar()}/>
      <Comment name = "Veli Gürbüz" timeAgo="16" star="3" comment="React comment 3" avatar={faker.image.avatar()}/>
      </Card>
</div>
  )
}
export default App;

