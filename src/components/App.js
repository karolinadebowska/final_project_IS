import React from 'react';
import './App.css';
import Nav from './nav';
import Carousel from './carousel';
import Footer from './footer';
import ReturnAndComplain from './returnAndComplain';
import About from './about';
import Product from './productPage'
import NotFound from './NotFound'
import { BrowserRouter, Route,Switch, Redirect} from 'react-router-dom';
import Main from './Main'
import Admin from './admin'
import DetailPage from "./DetailPage";
import ThankYouForm from "./ThankYouForm";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: false,
            page: 'home',
        }
    }
    static getDerivedStateFromProps(props, state) {
        return {page: props.page};
    }
    render(){
        return (
            <div id="wrapper">
                <BrowserRouter>
                    <Nav isSignedIn={this.state.isSignedIn}/>
                    <Carousel/>
                    <div className="contentBox">
                        <Admin/>
                        <Switch>
                        <Route path="/" exact component={Main}/>
                        <Route path="/produkty/:id" component={Product}/>
                        <Route path="/o-nas" exact component={About} />
                        <Route path="/zwroty-i-reklamacje" component={ReturnAndComplain} />
                        <Route path='/produkt/:id' component={DetailPage}/>
                        <Route path="/404" component={NotFound} />
                        <Redirect to="/404" />
                    </Switch>
                    </div>
                    <Footer handler = {this.handler}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

