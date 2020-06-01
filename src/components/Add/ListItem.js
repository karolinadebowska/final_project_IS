import React, { Component } from 'react';
import { db }  from '../Firebase/firebase'
import TableShowData from './tableShowData'
class ListItem extends Component {
    constructor() {
        super();
        this.state = {
            show:false,
            items:[]
        }
        this.handleChangeButton=this.handleChangeButton.bind(this)
        this.deleteRow=this.deleteRow.bind(this)
    }
    componentDidMount() {
        const itemsRef = db.ref('items');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    title: items[item].name,
                    description: items[item].description,
                    color:items[item].color,
                    type:items[item].type,
                    price:items[item].price,
                    photo:items[item].photo,
                    dateCreated:items[item].dateCreated
                });
            }
            this.setState({
                items: newState,
            });
            console.log(this.state.items)
        });
    }
    handleChangeButton(e) {
        this.setState({
            show: !this.state.show
        });
    }
    deleteRow(id){
        return db.ref('items').child(id).remove();
    }
    render() {
        const ListItemButton =
            <button type="button" onClick={this.handleChangeButton} className="btn btn-so">
                <a style={{'color': 'black','backgroundColor':' white'}} className="btn btn-block btn-social btn-google">
                    Wszystkie produkty
                </a>
            </button>
        return (
            <div className='container'>
                {ListItemButton}
                <br/>
                {this.state.show===true &&
                    <TableShowData items={this.state.items}/>
                }
            </div>
        );
    }
}
export default ListItem;