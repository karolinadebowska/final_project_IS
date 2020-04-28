import React from "react";
import App from './App'
import About from './about'
import NavBar from './nav'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavFooter = () => (
    <Router>
        <div className="col-md-3 mb-md-0 mb-3">
            <ul>
                <li>
                    <Link to="/o-nas">O nas</Link>
                </li>
                <li>
                    <Link to="/jak-kupowac">Jak kupowac? </Link>
                </li>
                <li>
                    <Link to="/dostawa">Koszt i czas dostawy</Link>
                </li>
                <li>
                    <Link to="/zwroty-i-reklamacje">Zwroty i Reklamacje</Link>
                </li>
                <li>
                    <Link to="/regulamin">Regulamin sklepu</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/"  />
            <Route
                path='/o-nas'
                render={(props) => <App {...props} page={'about'} />}
            />
            <Route path="/topics"  />
        </div>
    </Router>
);
export default NavFooter;