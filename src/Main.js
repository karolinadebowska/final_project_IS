import React from 'react'
import PhotoCard from "./PhotoCard";
import {Link} from "react-router-dom";
import Instagram from "./instagram";
const categories= ['Nowości','Hity KaNa', 'Torby bawełniane', 'Akcesoria zero waste', 'Woreczki', 'Frotki'];
const link_categories = ['/produkty/nowości','/produkty/hity', '/produkty/torby', '/produkty/zero-waste', '/produkty/woreczki', '/produkty/frotki']
let listItems
class Main extends React.Component{
    render(){
        return(

            <div className='parent'>
                <div className='container m-5'>
                    {listItems = categories.map((category, i) =>
                        <Link className="nav-link" style={{'display':'inline-block'}}to={link_categories[i]}><span className="sr-only">(current)</span>
                            <div className="col-md-5">
                                <PhotoCard name={category}/>
                            </div>
                        </Link>
                    )}

                    </div>
                <Instagram/>
            </div>
        )
    }
}
export default Main