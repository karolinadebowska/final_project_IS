import React from 'react'
import {dict_types} from "./consts";
import PhotoCard from "./PhotoCard";
import {Link} from "react-router-dom";
let items;
class DisplayProducts extends React.Component{
    render(){
        items=this.props.items;
        return(
            items.map((item) => {
                let type = item.type
                return (
                    this.props.titlePage==='nasze-produkty' ?
                        //photo card for nasze produkty page
                        <div className="col-md-4" key={item.id}>
                            <Link to={{
                                pathname: `/produkt/${item.id}`
                            }}><span className="sr-only">(current)</span>
                                <PhotoCard photoSrc={item.photo} name = {item.title} description = {item.description}
                                       displayPrice={true} id={item.id} dateCreated={item.dateCreated}
                                       price = {item.price} type = {item.type} color = {item.color} idShort={item.id.slice(-6)}/>
                            </Link>
                            </div>
                        :
                        //photo card for wszystkie inne
                        dict_types[type]===this.props.titlePage &&
                        <div className="col-md-4"key={item.id}>
                            <Link to={{
                                pathname: `/produkt/${item.id}`
                            }}><span className="sr-only">(current)</span>
                            <PhotoCard photoSrc={item.photo} name = {item.title} displayPrice={true} idShort={item.id.slice(-6)} id={item.id}
                                       description = {item.description} dateCreated={item.dateCreated} photos = {item.photos}
                                       price = {item.price} type = {item.type} color = {item.color}/>
                        </Link>
                        </div>
                )
            })
        )
    }
}
export default DisplayProducts