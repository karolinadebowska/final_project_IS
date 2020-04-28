import React, { Component } from 'react';
import './App.css';
import firebase from './Firebase/firebase.js'

class AddItem extends Component {
    constructor() {
        super();
        this.state = {
            currentItem: '',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('items');
        const item = {
            title: this.state.currentItem,
            description: this.state.description
        }
        itemsRef.push(item);
        this.setState({
            currentItem: '',
            username: ''
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {

        return (
            <div className='container'>
                <section className='add-item'>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="item" placeholder="Item" onChange={this.handleChange} value={this.state.item} />
                        <input type="text" name="description" placeholder="Description"  onChange={this.handleChange} value={this.state.description}  />
                        <button>Add Item</button>
                    </form>
                </section>
                <section className='display-item'>
                    <div className='wrapper'>
                        <ul>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}
export default AddItem;