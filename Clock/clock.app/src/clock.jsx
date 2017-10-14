import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import Ex from './ex.jsx';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state={
            "date": "",
           
        }
        
    }
    handleDate(event) {
        this.setState({"date": event.target.value});
    }
    render() {
        return (
            <div id="app">
                <h1>You can check exact date difference!</h1>
                <label>Enter your date: <input type="text" placeholder="mm.dd.yy" onChange={(event) => this.handleDate(event)}></input></label>     
                <Button className='buttons' bsStyle="primary" onClick={()=>ReactDOM.render(<Ex date={this.state.date}/>, document.getElementById('core'))}>Submit Date</Button>
                <div id='core'>
                </div>
           </div>
        )
    }
}

export default Clock;