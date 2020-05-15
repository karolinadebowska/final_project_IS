import React from "react";
import {Link} from "react-router-dom";
class PhotoCard extends React.Component{
    constructor() {
        super();
        this.state = {
        }
    }
    render(){
        return (
                <div className="card mb-4 box-shadow" style={{'minWidth':'270px'}}>
                    <img className="card-img-top"
                         src = {this.props.photoSrc}
                         data-holder-rendered="true"
                    alt='Zdjęcie produktu'/>
                    <div className="card-body" style={{'textAlign':'center'}}>
                        <h2 className="card-text">{this.props.name}</h2>
                        {this.props.displayPrice === true &&
                        <p className="card-text">{this.props.price} zł</p>
                        }
                        {this.props.displayPrice === true &&
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">NEW</small>

                            <div className="btn-group">
                                <button type="button"
                                        className="btn btn-sm btn-outline-secondary">
                                    <Link to={{pathname:`/produkt/${this.props.name}/${this.props.idShort}`,
                                        state: {
                                            id:this.props.id,
                                            name: this.props.name,
                                            description: this.props.description,
                                            photos: this.props.photos,
                                            price: this.props.price,
                                            type: this.props.type,
                                            color: this.props.color,
                                            photo:this.props.photoSrc
                                        }
                                    }}><span className="sr-only">(current)</span>
                                        View
                                    </Link>
                                </button>
                            </div>
                        </div>
                        }
                    </div>
                </div>
        )
    }
}
export default PhotoCard