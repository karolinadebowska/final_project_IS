import React from 'react'
import PromoCard from "./PromoCard";
import {Link} from "react-router-dom";
let promocje;
class DisplayPromoProducts extends React.Component{
    render(){
        promocje=this.props.promocje;
        return(
            promocje.map((promo) => {
                return (
                    <div className="col-md-4"key={promo.key}>
                        <Link to={{
                            pathname: `/produkt/${promo.id}`
                        }}><span className="sr-only">(current)</span>
                            <PromoCard items={this.props.items} id={promo.idProduct}
                            oldPrice={promo.oldPrice} newPrice={promo.price} quantity={promo.quantity}
                                       type={promo.type} endDate={promo.endDate}
                            />
                        </Link>
                    </div>
                )
            })
        )
    }
}
export default DisplayPromoProducts