import React from 'react'
class DetailPage extends React.Component{
    constructor() {
        super();
        this.state = {
            name: null,
            description: null,
            price: null,
            color: null,
            photo: null,
            id:null,
            img:null
        }
    }
    componentDidMount () {
        const {name, description,price,color,id,photo} = this.props.location.state
        this.setState(() => (
            {name,description,price,color,id,photo}
            )
        )
    }

    render(){
        return(
            <div className="container m-5">
                <h1 className="my-4">{this.state.name}
                </h1>
                <div className="row">
                    <div className="col-md-8">
                        <img alt="Zdjecie produktu" className="card-img-top rounded"
                             src = {this.state.photo}
                             data-holder-rendered="true"style={{'height':'auto','maxWidth':'500px','objectFit': 'cover',
                            'maxHeight': '500px'}}/>
                    </div>
                    <div className="col-md-4" style={{'textAlign':'center'}}>
                        <h3 className="my-3">Opis produktu</h3>
                       <p>{this.state.description}</p>
                        <ul>
                            <br/>
                            <li>cena: {this.state.price} zł</li>
                            {this.state.color!=="" &&
                            <li>kolor: {this.state.color}</li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default DetailPage