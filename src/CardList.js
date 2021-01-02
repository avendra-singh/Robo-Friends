import React from 'react';
import Card from'./Card'


const CardList=( {robots})=>{
var CardList=[],i;
for(i=0;i<robots.length;i++){
CardList.push(<Card robot={robots[i]}/>)    
}
return(CardList);
} 


export default CardList;