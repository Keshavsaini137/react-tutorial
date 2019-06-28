import React, {Component} from 'react';



class Car extends Component{
    constructor(){
        super();
        this.state = {
            color: 'red',
            type:'SUV'
        }
    }

    render(){
        return(
            <div className="App">
                <h1>Hello to Car Components</h1>
                <h3>Color of my car is {this.state.color}</h3>
                <h3>It's an {this.state.type}</h3>
                
            </div>
        );
    }
}

export default Car;