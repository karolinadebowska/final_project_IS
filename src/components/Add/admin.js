import React from "react";
import AddItem from "./AddItem";
import ListItem from './ListItem';
import AddPromo from "./AddPromo";

class Admin extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            show: !this.state.show

        });
    }
    render(){
        const AdminButton =
            <button type="button" onClick={this.handleChange} className="btn btn-lg btn-so">
                <a style={{'color': 'black','backgroundColor':' #ddab78'}} className="btn btn-block btn-social btn-google">
                    ADMIN MODE ON
                </a>
            </button>
        return(
            <div className='container'>
            {AdminButton}
            {this.state.show &&
                <div className='admin-options'>
                    <AddItem/>
                    <ListItem/>
                    <AddPromo/>
                </div>
            }
            </div>
        )
    }
}
export default Admin