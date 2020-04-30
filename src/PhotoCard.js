import React from "react";

class PhotoCard extends React.Component{
    render(){
        return (
                <div className="card mb-4 box-shadow" style={{'min-width':'400px'}}>
                    <img className="card-img-top"
                         src = {this.props.photo}
                         data-holder-rendered="true"/>
                    <div className="card-body">
                        <h2 className="card-text">{this.props.name}</h2>
                        <p className="card-text">{this.props.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">9 mins</small>
                            <div className="btn-group">
                                <button type="button"
                                        className="btn btn-sm btn-outline-secondary">View
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default PhotoCard