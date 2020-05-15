import React from 'react'
import Slogan from './slogan'
import './productPage.css'
import { db }  from './Firebase/firebase'
import {title_types} from "./consts";
import DisplayProducts from "./DisplayProducts";

class Product extends React.Component{
    constructor() {
        super();
        this.state = {
            items: [],
        }
    }
    componentDidMount() {
        const itemsRef = db.ref('items');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    title: items[item].name,
                    description: items[item].description,
                    color:items[item].color,
                    type:items[item].type,
                    price:items[item].price,
                    photo:items[item].photo
                });
            }
            this.setState({
                items: newState
            });
        });
    }
    render(){
        const titlePage = this.props.match.params.id;
        const link_valid = title_types.includes(titlePage);
        return(
            <div>
                <Slogan id='slogan'
                    title = {link_valid && titlePage}
                />
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <DisplayProducts items={this.state.items} titlePage = {link_valid && titlePage}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Product