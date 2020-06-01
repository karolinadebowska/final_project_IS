import React from "react";
import ButtonPromo from "./ButtonPromo";
import SeveralCheaperAdd from "./SeveralCheaperAdd";

class SeveralItemsCheaper extends React.Component {
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
                <ButtonPromo handleClick={this.handleChangeButton}typePromo={'Kilka sztuk taniej'}/>
                {this.state.show===true &&
                <SeveralCheaperAdd items={this.props.items}/>
                }
            </div>
        )
    }
}
export default SeveralItemsCheaper