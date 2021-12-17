
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './component/Weather';
import React from 'react';
import Form from './component/Form';
import Graph from './component/Graph';
import Header from './component/Header';
require('dotenv').config()


const API_key = process.env.REACT_APP_ACCESS_KEY
//var curr_Index = 0;

class App extends React.Component{
constructor(){
super();
this.state = {
city: undefined,
country: undefined,
icon: undefined,
images: undefined,
main: undefined,
celsius: undefined,
temp_high: undefined,
temp_low: undefined,
description: "",
date: undefined,
c_index: 0,
loading: true,
error:false
};
this.getIndex = this.getIndex.bind(this);
}


getIndex(newIndex) {   

if(newIndex > 0){
        //curr_Index = newIndex;
        this.setState({ c_index: newIndex });
        console.log("display new index " + this.state.c_index)
  
      }
      
return this.state.c_index;
}


getLowTemp(ltemp){
    
      let lowTemps = [];
      for (var i = 0; i < 7; i++) {
        lowTemps.push(ltemp[i].low_temp);              
      }

      return lowTemps;
    }

getHighTemp(htemp){
    
      let highTemps = [];
      for (var i = 0; i < 7; i++) {
        highTemps.push(htemp[i].high_temp);              
      }

      return highTemps;
    }    


    getDates(dt){
    
      let dateTemp = [];
      for (var i = 0; i < 7; i++) {
        dateTemp.push(new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short'}).format(new Date (dt[i].datetime)));              
      }
      
      return dateTemp;
    }   


getWeather =async(e)=>{
 
  e.preventDefault(e);

  this.setState({
    loading: true,
  });  

  
  const city=e.target.elements.city.value;

  if(city)
  {
    const api_call =await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API_key}`)
    const response = await api_call.json();
   
    this.setState({
     city:response.city_name,
     country:response.country_code,
     celsius:response.data[this.state.c_index].temp,
     temp_low:this.getLowTemp(response.data),
     temp_high:this.getHighTemp(response.data),
     temp_dates:this.getDates(response.data),
     description:response.data[this.state.c_index].weather.description,
     icon:response.data[this.state.c_index].weather.icon,
     date:response.data[this.state.c_index].datetime,
     loading: false,
     error:false
    });
  } else{
    this.setState({error:true});
  }
  

};


render(){

return(
  <div className="App">
  <Header />  
  <Form loadweather={this.getWeather} error={this.state.error} />
      <div className="container">
          <div className="row">
              <div className="col-12 col-sm-6 col-md-8">{ 
              this.state.city ? 
              <Graph city={this.state.city} temp_low={this.state.temp_low} temp_high={this.state.temp_high} temp_dates={this.state.temp_dates} onIndexChange={this.getIndex} />
              : null
              }
              </div>
              <div className="col-6 col-md-4">{ 
              this.state.city ? 
              <Weather city={this.state.city}  loading={this.state.loading} country={this.state.country} celsius={this.state.celsius} temp_low={this.state.temp_low} temp_high={this.state.temp_high} description={this.state.description} icon={this.state.icon} date={this.state.date} />
              : null
              }
            </div>
          </div>  
    </div>
    
  </div>

);
  }
}

export default App;
