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
import ImageUpload from "./ImageUpload";
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
            isSignedIn: false,
            page: 'home',
        }
            console.log(this.state.page)
    }
    static getDerivedStateFromProps(props, state) {
        return {page: props.page};
    }
    handler() {
        this.setState({
            page: 'o-nas'
        });
        console.log(this.state.page)
    }
    render(){
        return (
            <div id="wrapper">
                <BrowserRouter>
                    <Nav isSignedIn={this.state.isSignedIn}/>
                    <Carousel/>
                    <div className="contentBox">
                        <Route path="/" exact component={Main}/>
                        <Route path="/produkty/:id" component={Product}/>
                        <Route path="/o-nas" exact component={About} />
                        <Route path="/zwroty-i-reklamacje" component={ReturnAndComplain} />
                    </div>
                    <Footer handler = {this.handler}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

