import React from 'react'
import './App.css'
import {dic_find_descr_category} from './consts'


class  Slogan extends React.Component{
    handleChange = (e) => {
        this.props.sort(e.target.value);
    }
    render() {
        return (
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">{this.props.title.replace("-", " ")}</h1>
                    {dic_find_descr_category[this.props.title]}
                    <select name='sortBy' className="btn btn-primary my-2" onChange={this.handleChange}>
                        <option className="btn btn-primary my-2" value={'new'}>
                            Od najnowszych
                        </option>
                        <option className="btn btn-primary my-2" value={'az'}>
                            A-Z
                        </option>
                        <option className="btn btn-primary my-2" value={'za'}>
                            Z-A
                        </option>
                        <option className="btn btn-primary my-2" value={'asc'}>
                            od najniższej ceny
                        </option>
                        <option className="btn btn-primary my-2" value={'desc'}>
                            od najwyższej ceny
                        </option>
                    </select>
                </div>
            </section>
        )
    }
}
export default Slogan