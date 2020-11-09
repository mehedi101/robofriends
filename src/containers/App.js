import React, { Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';


class App extends Component {
    constructor() {
        super();
        this.state = { 
            robots : [],
            searchField:''
         }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json())
        .then(users => this.setState({robots: users}));

    }

    onSearchRobots = (event)=>{

        this.setState({
            searchField: event.target.value
        });
  

    }



    render() { 

            const {robots, searchField} = this.state;

            const filterdRobots = robots.filter((robot)=>{
              return  robot.name.toLowerCase().includes(searchField.toLowerCase());
            })

            return (    (!robots.length)? <h1>Loading</h1> :    

     
            <>
                <header className='tc'>
                    <h1 className='f1 logo-title'>Robo Friends</h1>
                    <SearchBox searchCange={this.onSearchRobots} />
                </header>
                <div className='tc'>
                <CardList robots = {filterdRobots}/>

                </div>
               
            </>
         );
    }
}
 
export default App;