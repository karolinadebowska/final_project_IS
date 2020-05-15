import React from 'react'
import {dict_types} from "./consts";
import PhotoCard from "./PhotoCard";
let items;
class DisplayProducts extends React.Component{
    render(){
        items=this.props.items.reverse();
        return(
            items.map((item) => {
                let type = item.type
                return (
                    this.props.titlePage==='nasze-produkty' ?
                        <div className="col-md-4" key={item.id}>
                            <PhotoCard photoSrc={item.photo} name = {item.title} description = {item.description} photos = {item.photos}
                                       displayPrice={true} id={item.id}
                                       price = {item.price} type = {item.type} color = {item.color} idShort={item.id.slice(-6)}/>
                        </div>
                        :
                        dict_types[type]===this.props.titlePage &&
                        <div className="col-md-4"key={item.id}>
                            <PhotoCard photoSrc={item.photo} name = {item.title} displayPrice={true} idShort={item.id.slice(-6)} id={item.id}
                                       description = {item.description} photos = {item.photos}
                                       price = {item.price} type = {item.type} color = {item.color}/>
                        </div>
                )
            })
        )
    }
}
export default DisplayProducts