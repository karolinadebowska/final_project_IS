import React from "react";
import {Link} from "react-router-dom";
class PhotoCard extends React.Component{
    constructor() {
        super();
        this.state = {
        }
        this.getTodayDate=this.getTodayDate.bind(this)
        this.isNew=this.isNew.bind(this)
    }
    getTodayDate() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        return today
    }
    isNew(today,dateCreated){
        let dc = new Date(dateCreated);
        let t = new Date(today);
        const diffTime = Math.abs(dc - t);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays>14)
           return 0
        else
            return 1
    }

    render(){
        const today = this.getTodayDate()
        return (
                <div className="card mb-4 box-shadow" style={{'minWidth':'270px'}}>
                    <img className="card-img-top"
                         src = {this.props.photoSrc}
                         data-holder-rendered="true"
                         style={{'objectFit': 'cover'}}
                    alt='Zdjęcie produktu'/>
                    <div className="card-body" style={{'textAlign':'center'}}>
                        <h2 className="card-text">{this.props.name}</h2>
                        {this.props.displayPrice === true &&
                            <div>
                                <p className="card-text">{this.props.price} zł</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    {this.isNew(today, this.props.dateCreated) === 1 ?
                                        <small className="text-muted">NOWOŚĆ</small>
                                        :
                                        <small className="text-muted"></small>
                                    }
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
        )
    }
}
export default PhotoCard