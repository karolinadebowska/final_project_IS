import React, { Component } from 'react';
import {db}  from '../Firebase/firebase'
import DiscountCategoryAdd from "./DiscountCategoryAdd";
import DiscountProductAdd from "./DiscountProductAdd";
import SeveralItemsCheaper from "./SeveralItemsCheaper";
class AddPromo extends Component {
    constructor() {
        super();
        this.state = {
            items:[]
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
                    photo:items[item].photo,
                    dateCreated:items[item].dateCreated
                });
            }
            this.setState({
                items: newState,
            });
            console.log(this.state.items)
        });
    }

    render() {

        return (
            <div className='container'>
                <h3>Dodaj promocje</h3>
               <SeveralItemsCheaper items={this.state.items}/>
               <DiscountCategoryAdd/>
               <DiscountProductAdd/>
            </div>
        );
    }
}
export default AddPromo;