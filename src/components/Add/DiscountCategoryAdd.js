import React from "react";
import ButtonPromo from "./ButtonPromo";

class DiscountCategoryAdd extends React.Component {
    constructor() {
        super();
        this.state = {
            show:false,
        }
        this.handleChangeButton=this.handleChangeButton.bind(this)
    }
    handleChangeButton(e) {
        this.setState({
            show: !this.state.show
        });
    }
    render() {
        return (
            <div>
                <ButtonPromo handleClick={this.handleChangeButton}typePromo={'Dodaj zniżkę do działu'}/>
                {this.state.show===true &&
                <p>k</p>}
            </div>
        )
    }
}
export default DiscountCategoryAdd;