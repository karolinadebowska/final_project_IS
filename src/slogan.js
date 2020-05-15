import React from 'react'
import './App.css'
import {dic_find_descr_category} from './consts'
const Slogan = (props) => {
    return(
        <section className="jumbotron text-center">
        <div className="container">
            <h1 className="jumbotron-heading">{props.title.replace("-", " ")}</h1>
            {dic_find_descr_category[props.title]}
            <p>
                <a href="#" className="btn btn-primary my-2">
                    Sortuj (nie dziala)
                </a>
                <a href="#" className="btn btn-secondary my-2">
                    Sortuj (nie dziala)
                </a>
            </p>
        </div>
    </section>
    )
}
export default Slogan