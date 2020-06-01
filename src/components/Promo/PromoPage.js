import React from "react";
import BlockPromo from "./BlockPromo";
import {green,pink} from '../consts'
import {Link} from "react-router-dom";
import {db} from "../Firebase/firebase";
import DisplayPromoProducts from "./DisplayPromoProducts";
class PromoPage extends React.Component{
    constructor() {
        super();
        this.state = {
            sale: [],
        }
    }
    componentDidMount() {
        const itemsRef = db.ref('promocje');
        itemsRef.on('value', (snapshot) => {
            let promocje = snapshot.val();
            let newState = [];
            for (let promo in promocje) {
                newState.push({
                    //id produktu
                    id: promocje[promo].idProduct,
                    quantity: promocje[promo].quantity,
                    type: promocje[promo].type,
                    startDate: promocje[promo].startDate,
                    endDate: promocje[promo].endDate,
                    price: promocje[promo].newPrice,
                    oldPrice: promocje[promo].oldPrice,
                    dateCreated:promocje[promo].dateCreated,
                    active:promocje[promo].active
                });
            }
            this.setState({
                sale: newState,
            });
        });
    }
    render(){
        //check if this.props.items which one have the same id as promo
        return(
            <div className='container'>
                <div className='row'>
                    <Link to={{
                        pathname: '/produkty/zestawy',
                    }}>
                    <BlockPromo textPromo={'W ZESTAWIE TANIEJ'} color={green} kod='zestaw'/>
                    </Link>
                    <BlockPromo textPromo={'ZERO WASTE -20%'} color={pink}/>
                 </div>
                <DisplayPromoProducts items = {this.props.items} promocje={this.state.sale} titlePage={this.state.sale.type}/>
            </div>
        )
    }
}
export default PromoPage;