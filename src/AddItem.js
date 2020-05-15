import React, { Component } from 'react';
import './App.css';
import { db }  from './Firebase/firebase'
import {Form, Input } from 'reactstrap'
import ImageUpload from "./ImageUpload";
import {categories,colors} from './consts'
import './addItem.css'

let listTypes,listColors;
class AddItem extends Component {
    constructor() {
        super();
        this.state = {
            currentItem: '',
            description: '',
            color:'',
            price:'',
            type:'hity kana',
            items: [],
            show:false,
            dateCreated:'',
            photo:''
        }
        this.child = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeButton=this.handleChangeButton.bind(this)
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
                    dateCreated:items[item].dateCreated,
                    photo:items[item].photo
                });
            }
            this.setState({
                items: newState,
            });
        });
    }
    uploadPicture(id){
        this.child.current.handleUpload(id);
    }
    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = db.ref('items');

        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;

        const item = {
            name: this.state.currentItem,
            description: this.state.description,
            color:this.state.color,
            type:this.state.type,
            price:this.state.price,
            dateCreated: dateTime,
            photo:this.state.photo
        }
        itemsRef.push(item);
        this.setState({
            currentItem: '',
            description: '',
            color:'',
            type:'',
            price:'',
            photos:[],
            dateCreated: '',
            photo:''
        });
        let self = this;
        itemsRef.limitToLast(1).once('value')
            .then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    self.uploadPicture(childSnapshot.key)
                });

            })
            .catch(function(error) {
                console.log(error);
            });
    }
    handleChange(e) {
        e.target.value===null ?
            console.log('null')
            :
            (this.setState({
            [e.target.name]: e.target.value
        }));
    }
    handleChangeButton(e) {
        this.setState({
            show: !this.state.show
        });
    }
    render() {
        const AddItemButton =
            <button type="button" onClick={this.handleChangeButton} className="btn btn-lg btn-so">
                <a style={{'color': 'black','backgroundColor':' white'}} className="btn btn-block btn-social btn-google">
                    Dodaj produkt
                </a>
            </button>
        return (
            <div className='container'>
                {AddItemButton}
                <br/>
                {this.state.show===true &&
                    <section className='add-item'>
                        <Form onSubmit={this.handleSubmit}  encType="multipart/form-data" method="post">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                            <Input className="text-primary" type="text" required name="currentItem" placeholder="Item"
                                   onChange={this.handleChange} value={this.state.currentItem}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                            <Input type="textarea"  className="text-primary"required name="description" placeholder="Description"
                                   onChange={this.handleChange} value={this.state.description}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-2">
                            <Input className="text-primary" type="number" required name="price" placeholder="Price" onChange={this.handleChange}
                                   value={this.state.price}/>
                                </div>
                                <div className="form-group col-md-3">
                                    <select name="color"  onChange={this.handleChange}>
                                        {listColors = colors.map((color, i) =>
                                            <option key={i} value={color.toLowerCase()}>
                                                {color.toLowerCase()}
                                            </option>)}
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <select name='type' onChange={this.handleChange}>
                                        {listTypes = categories.map((category, i) =>
                                            <option key={i} value={category.toLowerCase()}>
                                                    {category.toLowerCase()}
                                            </option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <ImageUpload ref={this.child} required name="photo1" onChange={this.handleChange}/>
                                <button>Add Item</button>
                            </div>
                        </Form>
                    </section>
                }
            </div>
        );
    }
}
export default AddItem;