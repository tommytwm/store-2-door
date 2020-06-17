import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Link } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header
                        className="header-color"
                        title={
                            <div>
                                <Link style={{  textDecoration: 'none', color: '#2F2B0E', fontSize: '2em', float: 'left' }} to="/"> Store 2 Door </Link>
                            </div>

                        }
                        scroll
                    >
                        <Navigation>
                            <Link style={{ color: '#2F2B0E', fontSize: '1.35em' }} to={process.env.PUBLIC_URL + "/"}>Home</Link>
                            <Link style={{ color: '#2F2B0E', fontSize: '1.35em' }} to={process.env.PUBLIC_URL + "/shop"}>Shop</Link>
                        </Navigation>
                    </Header>
                    <Drawer style={{ fontFamily: 'Roboto Mono', color: '#2F2B0E' }} title="Welcome">
                        <Navigation style={{ fontFamily: 'Roboto Mono' }}>
                            <Link to={process.env.PUBLIC_URL + "/"} >Home</Link>
                            <Link to={process.env.PUBLIC_URL + "/shop"} >Shop</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main/>
                    </Content>
                </Layout>
            </div>

        );
    }
}

export default App;


//<Link to="/projects">Projects</Link>
