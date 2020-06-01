import React from "react";
let items
class PromoCard extends React.Component{
    constructor() {
        super();
        this.state = {
        }
    }
    render(){
        items=this.props.items;
        return (
            items.map((item) => {
                if(item.key===this.props.id){
                return(
            <div className="card mb-4 box-shadow" style={{'minWidth':'270px'}}>
                <img className="card-img-top"
                     src = {item.photo}
                     data-holder-rendered="true"
                     style={{'objectFit': 'cover'}}
                     alt='Zdjęcie produktu'/>
                <div className="card-body" style={{'textAlign':'center'}}>
                    <h2 className="card-text">{item.title}</h2>
                    {this.props.displayPrice === true &&
                    <div>
                        <p className="card-text">{this.props.quantity} za {this.props.newPrice} zł</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted"></small>
                            <div className="btn-group">
                                <button type="button" className="btn btn-outline-primary">
                                    <i className="fas fa-cart-arrow-down"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
                )}
            })
        )
    }
}
export default PromoCard;