import React, { Component } from 'react'

 class DecideActivity extends Component {

    constructor(props){
        super(props);
        this.state={
            latitude:0,
            error:''

        };
    }
   
  /*state = {
    longitude:0,
   } */

   DecideActivity(lat){
    const currentMounth=new Date().getMonth();
    if(lat<0)
    {   //güney
        if(currentMounth > 3 && currentMounth <9){
           
            return 'Havalar Soğuk Spor Yapabilirsin'
        }
        else{
            return 'Havalar Sıcak Yüzmeye Git'
        }
    }
    else
    {   //kuzey
        if(currentMounth > 9 && currentMounth <3){
            return 'Havalar Soğuk Spor Yapabilirsin'
        }
        else{
            return 'Havalar Sıcak Yüzmeye Git'
        }
    }
   
}



   
    render() {

        window.navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            this.setState({
                latitude:position.coords.latitude
            });
          },
          (err) => {
              this.setState({
                error:err.message
              });
                console.log(err);
          }
          );
          

          const{latitude,error}=this.state;
          console.log(this.DecideActivity(latitude));

          if(latitude !== 0 && !error)
          {
              const activity = this.DecideActivity(latitude);
              return(

                <h2 className="ui header">
                <i className="sun icon"></i>
                <div className="content">
                  Enlem : {latitude}
                  <br/>
                  {activity}             
                </div>
              </h2>
                  
              )
          } 
          else if(latitude === 0 && error){

            return (
                <div>
                    Hata : {error}
                </div>
            )
          }
          


        return (
            <div>
               Loading...
            </div>
         
        )
    }
}
export default DecideActivity;