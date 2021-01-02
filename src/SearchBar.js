import React from 'react';
import './SeachBar.css'
const SearchBar=({onclick})=>{
return(
    <div>
    {console.log()}
    <input placeholder="input robo name" type="seach" onChange={onclick}/>
</div>
);
} 
export default SearchBar;