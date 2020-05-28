import React from 'react'
import './App.css'
import {Link} from "react-router-dom";


const ThankYouForm = () =>
    <div className='parent'>
        <div className='container m-5'>
            <h3>Twoja reklamacja została wysłana</h3>
            <p>W ciągu 14 dni poinformujemy Cię mailowo lub telefonicznie o wyniku postępowania reklamacyjnego</p>
            <br/>
            <p style={{textAlign:"center"}}>
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>Strona główna </Link>
            </p>
        </div>
    </div>

export default ThankYouForm;