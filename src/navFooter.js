import React from "react";
import App from './App'
import {Link } from "react-router-dom";
class NavFooter extends React.Component {
    state = {currentPage: '/'}

    onTabClick(event, tabName) {
        this.setState({ currentPage: tabName })
    }

    render() {
        return (
            <div className="col-md-3 mb-md-0 mb-3">
                <ul>
                    <li>
                        <Link to="/o-nas"
                              onClick={event => this.onTabClick(event, '/o-nas')}>
                            O nas
                        </Link>
                    </li>
                    <li>
                        <Link to="/jak-kupowac" onClick={event => this.onTabClick(event, '/o-nas')}>
                            Jak kupowac?
                        </Link>
                    </li>
                    <li>
                        <Link to="/dostawa" onClick={event => this.onTabClick(event, '/o-nas')}>
                            Koszt i czas dostawy
                        </Link>
                    </li>
                    <li>
                        <Link to="/zwroty-i-reklamacje" onClick={event => this.onTabClick(event, '/o-nas')}>
                            Zwroty i Reklamacje
                        </Link>
                    </li>
                    <li>
                        <Link to="/regulamin" onClick={event => this.onTabClick(event, '/o-nas')}>
                            Regulamin sklepu
                        </Link>
                    </li>
                </ul>
                <hr/>
            </div>
        )
    }
}
export default NavFooter;