import React from 'react';
import logo from "./logo.svg";
import './App.css';
import {Link} from "react-router-dom";

const categories= ['Hity KaNa', 'Torby bawełniane', 'Akcesoria zero waste', 'Woreczki', 'Frotki'];
const link_categories = ['/produkty/hity', '/produkty/torby', '/produkty/zero-waste', '/produkty/woreczki', '/produkty/frotki']
let listItems;
let link;

class Nav extends React.Component {
    state = {currentPage: '/'}

    onTabClick(event, tabName) {
        this.setState({ currentPage: tabName })
    }
    render() {
        const googleButton =
            <button type="button" className="btn btn-lg btn-so"><a style={{'color': 'white'}}
                                                                   className="btn btn-block btn-social btn-google">
                <span className="fa fa-google"></span> Zaloguj z Google
            </a></button>
        const logoDisplay =
            <Link className="nav-link" to='/'><span className="sr-only">(current)</span>
                <a className="nav-item" ><img src={logo} className="App-logo smaller"
                                              alt="logo"/></a>
            </Link>
        return (
            <div>
                <div className='center'>
                <div className='logoOnDesktop'>
                    {logoDisplay}
                </div>
                </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='logoOnPhone'>
                    {logoDisplay}
                </div>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav justify-content-center">
                        {listItems = categories.map((category, i) =>
                            <li className="nav-item" key={i}>
                                <Link className="nav-link" to={link_categories[i]}><span className="sr-only">(current)</span>
                                    {category}
                                </Link>
                            </li>)}
                    </ul>
                </div>
            </nav>
            </div>
        );
    }
}

export default Nav;