import React,{Component} from 'react';
import CardList from './CardList'
import SearchBar from './SearchBar'
import {robots} from './robo'
import './App.css'
class App extends Component{
    constructor(){
        super();
        this.state={
            searchfield:"",
            robots:robots

        }
    }
    onclick=(event)=>{
        
    this.setState({ searchfield: event.target.value })


    }
    render(){
        
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

        return (
        <div>
            <header>
                <h1 align="center">RoboFriends</h1>
            </header>
            <footer align="center">
            <SearchBar onclick={this.onclick}/>
                <CardList robots={filteredRobots}/>
            </footer>
        </div>
        );
    
}
}
export default App;


