import React from 'react';
import './App.css'
import {Link} from "react-router-dom";
const NotFound = () =>
    <div className='container' id='notFound'>
        <h3>Strona niedostępna</h3>
        <p>Strona, której szukasz, nie istnieje.</p>
        <br/>
        <p style={{textAlign:"center"}}>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>Strona główna </Link>
        </p>
    </div>

export default NotFound;