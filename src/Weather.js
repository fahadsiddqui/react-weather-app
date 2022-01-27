import React from 'react';
import Card from './Card';

function Weather(props){
console.log("Prop" , props);
return(
    <>
        <Card day={props.data.temp.day} fell={props.data.feels_like.day} description={props.data.weather[0].description}>
        </Card>
    </>
)

}

export default Weather;