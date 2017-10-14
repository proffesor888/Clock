import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';
import ReactDOM from 'react-dom';

class Ex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "seconds": 0,
            "minutes": 0,
            "hours": 0,
            "days": 0,
            "status": ""
            //"date": "",
            
        }
        this.timer = undefined;
    }
    countTime() {
        let enteredDate = Date.parse(this.props.date);
        let today = new Date();
        let countDown = undefined;
        if (today > enteredDate) {
            countDown = today - enteredDate;
            this.setState({"status": "Time that past: "});
            this.setState({"days": Math.floor((countDown/(1000 * 60 * 60 * 24)))});
            this.setState({"seconds": Math.floor((countDown/1000))%60});
            this.setState({"minutes": Math.floor((countDown/(1000*60))%60)});
            this.setState({"hours": Math.floor((countDown/(1000*60*60))%24)});
        } else {
            countDown = enteredDate - today;
            this.setState({"status": "Time ahead: "})
            this.setState({"days": Math.floor((countDown/(1000 * 60 * 60 * 24)))});
            this.setState({"seconds": Math.floor((countDown/1000))%60});
            this.setState({"minutes": Math.floor((countDown/(1000*60))%60)});
            this.setState({"hours": Math.floor((countDown/(1000*60*60))%24)});
        }
    }
    stopTimer() {
        clearInterval(this.timer);
    }
    reset() {
        ReactDOM.unmountComponentAtNode(document.getElementById("core"));
        this.setState({"seconds":0,"minutes":0,"hours":0,"days":0,"status":"" });
    } 
    componentDidMount() {
        this.timer = setInterval(() => this.countTime(), 1000);
    } 
    render() {
        return (
            <div>
            <p> 
                {this.state.status}
                Days: {this.state.days},
                Hours: {this.state.hours},
                Minutes: {this.state.minutes},
                Seconds: {this.state.seconds},                   
            </p>
            <Button className='buttons' bsStyle='danger' onClick={()=>this.stopTimer()}>Stop counting</Button>
            <Button className='buttons' bsStyle='danger' onClick={()=>this.reset()}>Reset counting</Button>
            </div>
        )
    }
}

export default Ex;