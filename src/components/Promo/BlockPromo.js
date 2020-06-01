import React from "react";
class BlockPromo extends React.Component{
    constructor() {
        super();
        this.state = {
        }
       // this.handleChange = this.handleChange.bind(this);
    }
    render(){
        return (
            <button className="col-md"
                    style={{'minHeight': '200px', 'margin': '2%', 'backgroundColor': this.props.color}}>
                <h1>{this.props.textPromo}</h1>
            </button>
        )
    }
}
export default BlockPromo