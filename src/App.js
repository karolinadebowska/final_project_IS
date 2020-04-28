import React from 'react';
import Firebase from 'firebase';
import './App.css';
import ReactDOM from "react-dom";
import Nav from './nav';
import Carousel from './carousel';
import Footer from './footer';
import ReturnAndComplain from './returnAndComplain';
import About from './about';
import Product from './productPage'
import AddItem from "./AddItem";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: false,
            page: 'home',
        }
        {
            console.log(this.state.page)
        }
    }
    static getDerivedStateFromProps(props, state) {
        return {page: props.page};
    }
    render(){

        return (
            <div id="wrapper">
                <Nav isSignedIn={this.state.isSignedIn}/>
                <Carousel/>
                <div className="contentBox">
                    <AddItem/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;

