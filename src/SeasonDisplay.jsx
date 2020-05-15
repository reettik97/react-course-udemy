import React from 'react';

import "./SeasonDisplay.css";


const seasonConfig = {
  winter:{
    text : "Burr, it is chilly",
    icon : "snowflake" 
  },
  summer:{
    text : "Lets hit the beach!",
    icon : "sun" 
  }
}

const getSeason = (lat)=>{
  const month  =  new Date().getMonth();
  if(month>2 && month<9){
    return lat > 0 ? "summer" : "winter";
  }else{
     return lat < 0 ? "winter" : "summer"; 
  }
}

const SeasonDisplay = (props)=> {
  let season = getSeason(props.lat);
  const {text , icon} = seasonConfig[season];
  
  return (
    <div className={`${season} season-display`}>
      <i className={`icon-left massive ${icon} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${icon} icon`}></i>
      </div>
  );
}

export default SeasonDisplay;