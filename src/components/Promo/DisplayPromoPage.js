import React from "react";
import DisplayProducts from "../DisplayProducts";
class DisplayPromoPage extends React.Component{
    render() {
        return (
            <div>
                <DisplayProducts items={this.state.items} titlePage={'promocje'}/>
            </div>
        )
    }
}
export default DisplayPromoPage;