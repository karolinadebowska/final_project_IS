import React from 'react';
import './App.css';
import {Link} from "react-router-dom";
import {categories,link_categories,logoDisplay} from './consts'
import Google from './googleButton'

let listItems;

class Nav extends React.Component {
    render() {
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
                            <li className="nav-item" key={i} data-toggle="collapse" data-target=".navbar-collapse.show" >
                                <Link className="nav-link" to={link_categories[i]} ><span className="sr-only">(current)</span>
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
/*
*         <div className='logoOnPhone'><Google/></div>*/