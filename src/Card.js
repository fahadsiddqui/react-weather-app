import React from 'react';
import weather_image from './weather.gif';
import './App.css';

function Card(props){
console.log("card ",props);
    return(
    <>
      <div className='card'>
          <div className='card-header'>
            <img src={weather_image} />     
            <h6 className='date'>Date : {props.day}</h6>       
          </div>
          <div className='card-body'>
              <h6 className='temp'>Temp : {props.day}</h6>
              <h6 className='fell'>Feel : {props.fell}</h6> 
              <h6 className='desc'>Description : {props.description}</h6>
          </div>
      </div>
    </>
)
}

export default Card;