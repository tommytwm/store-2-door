import React, { Component } from 'react';
import './App.css';
import { Footer, FooterSection, FooterLinkList, Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Link } from 'react-router-dom';
import {IconContext} from 'react-icons';
import { FaUserCircle } from 'react-icons/fa';


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
                            <Link style={{ color: '#2F2B0E', fontSize: '1.35em' }} to={process.env.PUBLIC_URL + "/deliver"}>Deliver</Link>
                            <Link style={{ color: '#2F2B0E', fontSize: '1.35em' }} to={process.env.PUBLIC_URL + "/orders"}>Orders</Link>
                            <Link style={{ color: '#2F2B0E', fontSize: '1.35em' }} to={process.env.PUBLIC_URL + "/userprofile"}>
                                <IconContext.Provider value={{ color: "white" }}>
                                <div>
                                    <FaUserCircle />
                                </div>
                                </IconContext.Provider>
                            </Link>
                        </Navigation>
                    </Header>
                    <Drawer style={{ fontFamily: 'Roboto Mono', color: '#2F2B0E' }} title="Welcome">
                        <Navigation style={{ fontFamily: 'Roboto Mono' }}>
                            <Link to={process.env.PUBLIC_URL + "/"} >Home</Link>
                            <Link to={process.env.PUBLIC_URL + "/shop"} >Shop</Link>
                            <Link to={process.env.PUBLIC_URL + "/deliver"} >Deliver</Link>
                            <Link to={process.env.PUBLIC_URL + "/orders"} >Orders</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
  
                        <Main/>
                    </Content>
                    <Footer className="header-color" size="mini">
                        <FooterSection type="left" logo="Store 2 Door">
                            <FooterLinkList style={{color:'black'}}>
                                <text>Help</text>
                                <text>Privacy & Terms</text>
                            </FooterLinkList>
                        </FooterSection>
                    </Footer>
                </Layout>
            </div>

        );
    }
}

export default App;


//<Link to="/projects">Projects</Link>
