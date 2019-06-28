import React, {Component} from 'react';

class Laptop extends Component{
    state ={
        brandName: "Dell",
        laptopSize: 15,
        switchWifi: false,
        isWifiOn: "YOLO!"
    }
    
    doesItHaveWifi = () => {
        if(this.state.switchWifi){
            this.setState({isWifiOn: "Wifi is On Now!"}) ;
        }
        else{
            this.setState({isWifiOn: "Wifi is Off Now!"});
        }
    }

    toggleWifiHandler = () => {
        console.log("In toggleWifiHandler")
        const wifiSwitch = this.state.switchWifi;
        this.setState({switchWifi: !wifiSwitch});
        this.doesItHaveWifi();
    }

    render(){
        return(
            <div>
                <h1>Hello to the Laptop Component!</h1>
                <h4>Laptop Name is : {this.props.itemsName}</h4>
                <h4>Laptop Size {this.state.laptopSize} Inch</h4>
                {/* <p>Hello: {this.state.switchWifi}</p> */}
                <button className="button" onClick={this.toggleWifiHandler}>wifi</button>
                <h4>Hello: {this.state.isWifiOn}</h4>
            </div>
        );
    }
}

export default Laptop;