import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {readonly: false};
        this.toggleState = this.toggleState.bind(this);
    }

    toggleState() {
        this.setState(({readonly})=>({readonly: !readonly}));
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <input value={this.state.data} readOnly={this.state.readonly}/>
                <button onClick={this.toggleState}>{this.state.readonly ? 'Make Editable' : 'Make Readonly'}</button>
            </div>
        );
    }
}

export default App;
