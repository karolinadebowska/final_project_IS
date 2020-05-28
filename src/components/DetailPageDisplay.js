import React from 'react'
class DetailPageDisplay extends React.Component{
    constructor() {
        super();
    }
    render(){
        return (
            <div className="container m-5">
                <h1 className="my-4">{this.props.item.name}
                </h1>
                <div className="row">
                    <div className="col-md-8">
                        <img alt="Zdjecie produktu" className="card-img-top rounded"
                             src={this.props.item.photo}
                             data-holder-rendered="true" style={{
                            'height': 'auto', 'maxWidth': '500px', 'objectFit': 'cover',
                            'maxHeight': '500px'
                        }}/>
                    </div>
                    <div className="col-md-4" style={{'textAlign': 'center'}}>
                        <h3 className="my-3">Opis produktu</h3>
                        <p>{this.props.item.description}</p>
                        <ul>
                            <br/>
                            <li>cena: {this.props.item.price} zł</li>
                            {(this.props.item.color !== 'nie aplikuje') &&
                            <li>kolor: {this.props.item.color}</li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default DetailPageDisplay