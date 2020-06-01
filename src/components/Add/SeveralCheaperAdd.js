import React, { Component } from 'react';
import '../App.css';
import { db }  from '../Firebase/firebase'
import {Form, Input } from 'reactstrap'
import './addItem.css'
let listIds;

class SeveralCheaperAdd extends Component {
    constructor() {
        super();
        this.state = {
            type:'severalcheaper',
            active:false,
            startDate:'',
            endDate:'',
            idProduct:'',
            quantity:null,
            newPrice:null,
            oldPrice:null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        //get a date
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;

        const itemsRef = db.ref('promocje');
        const promo = {
            type:this.state.type,
            active: true,
            startDate:this.state.startDate,
            endDate:this.state.endDate,
            idProduct:this.state.idProduct,
            quantity:this.state.quantity,
            newPrice:this.state.newPrice,
            oldPrice:this.state.oldPrice,
            dateCreated:dateTime
        }
        itemsRef.push(promo);
        //reset
        this.setState({
            type:'severalcheaper',
            active:false,
            startDate:'',
            endDate:'',
            idProduct:'',
            quantity:null,
            newPrice:null,
            oldPrice:null
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
    render() {
        return (
            <div className='container'>
                <section className='add-item'>
                    <Form onSubmit={this.handleSubmit}  encType="multipart/form-data" method="post">
                        <div className="form-row">
                        <div className="form-group col-md-">
                            <select name='idProduct' onChange={this.handleChange}>
                                {listIds = this.props.items.map((item, i) =>
                                    <option value={item.id}>
                                        {item.title + item.id}
                                    </option>
                                )}
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <Input className="text-primary" type="number" required name="quantity" placeholder="Quantity" onChange={this.handleChange}
                                   value={this.state.quantity}/>
                        </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-2">
                                <Input className="text-primary" type="number" required name="newPrice" placeholder="New price" onChange={this.handleChange}
                                       value={this.state.newPrice}/>
                            </div>
                            <div className="form-group col-md-2">
                                <Input className="text-primary" type="number" required name="oldPrice" placeholder="Old price" onChange={this.handleChange}
                                       value={this.state.oldPrice}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <Input className="text-primary" type="date" required name="startDate" onChange={this.handleChange}
                                       value={this.state.startDate}/>
                            </div>
                                <div className="form-group col-md-3">
                                    <Input className="text-primary" type="date" required name="endDate" onChange={this.handleChange}
                                           value={this.state.endDate}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <button>Dodaj promocję</button>
                        </div>
                    </Form>
                </section>
            </div>
        );
    }
}
export default SeveralCheaperAdd;