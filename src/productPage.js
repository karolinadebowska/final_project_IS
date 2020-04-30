import React from 'react'
import Slogan from './slogan'
import './productPage.css'
import PhotoCard from "./PhotoCard";
class Product extends React.Component{
    render(){
        const title_types = ['nowości','hity','torby','zero-waste','woreczki','frotki']
        const title = this.props.match.params.id;
        const link_valid = title_types.includes(title);


        return(
            <div>
                <Slogan
                    title = {link_valid ? title : 'Nasze produkty'}
                />
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <PhotoCard/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Product