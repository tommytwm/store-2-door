import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import logo from './logo.svg';
import './App.css';
import Main from './components/main.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Content>
                    <Main />
                </Content>
            </div>
        );
    }
}

export default App;