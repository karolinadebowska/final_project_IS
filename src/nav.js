import React from 'react';
import logo from "./logo.svg";
import './App.css';

const categories= ['Hity KaNa', 'Torby bawełniane', 'Akcesoria zero waste', 'Woreczki', 'Frotki'];
let listItems;

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav justify-content-center">
                    {listItems = categories.map((category,i) =>
                        <li className="nav-item" key={i}>
                            <a className="nav-link" href="#"><span className="sr-only">(current)</span>{category}</a></li>)}
                </ul>
            </div>
            <a className="nav-item" ><img style = {{'display':'block'}} src={logo} className="App-logo smaller" alt="logo" /></a>
            <button type="button" className="btn btn-lg btn-so"><a style={{'color':'white'}}className="btn btn-block btn-social btn-google">
                <span className="fa fa-google"></span> Sign in with Google
            </a></button>

        </nav>
    );
}

export default Nav;