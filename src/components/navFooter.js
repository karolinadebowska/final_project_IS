import React from "react";
import {Link } from "react-router-dom";
class NavFooter extends React.Component {
    render() {
        return (
            <div className="col-md-3 mb-md-0 mb-3">
                <ul>
                    <li>
                        <Link to="/o-nas" onClick={() => window.scrollTo(0, 0)}>
                            O nas
                        </Link>
                    </li>
                    <li>
                        <Link to="/jak-kupowac"  onClick={() => window.scrollTo(0, 0)}>
                            Jak kupowac?
                        </Link>
                    </li>
                    <li>
                        <Link to="/dostawa"  onClick={() => window.scrollTo(0, 0)}>
                            Koszt i czas dostawy
                        </Link>
                    </li>
                    <li>
                        <Link to="/zwroty-i-reklamacje"  onClick={() => window.scrollTo(0, 0)}>
                            Zwroty i Reklamacje
                        </Link>
                    </li>
                    <li>
                        <Link to="/regulamin"  onClick={() => window.scrollTo(0, 0)}>
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