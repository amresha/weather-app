import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Weather = props => {
    return (
     <div className='container-fluid'>
      {props.loading ? <div className='cards pt-5'><ScaleLoader color="rgba(75,192,192,1)" /> </div>:
          <div className='cards pt-4'>
          {props.celsius ? (<h1 className='py-2 degree'>{props.celsius}&deg;C</h1>) :null }
          <h1 className='city'>{props.city}</h1>
          {props.date ? (<h4 className='date'>{new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short'}).format(new Date (props.date))}</h4>) : null }
          {props.icon ? (<h5 className='py-4 desc'><img src={`/icons/${props.icon}.png`} width="32px" height="32px" alt=''/> {props.description} </h5>) :null }
          {/** show high and low temp */}
          {lowhighTemp(props.temp_low, props.temp_high)}
          </div>
      }        
     </div>   
    );
};

function lowhighTemp(low, high) {
  if(low && high)
  return (
    <h3>
 
    </h3>

  );
}


export default Weather;

