import React from 'react';
import './App.css'
import PageHeader from './pageHeader'
import ContactUs from './complaint';
import {text_return_and_complain} from "./consts";

class ReturnAndComplain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'Zwroty i reklamacje'
        }
    }
    render(){
        return (
            <div className='parent'>
                <div className='container'>
                    <PageHeader header={this.state.title}/>
                    <br/>
                    <div>{text_return_and_complain}</div>
                    <ContactUs/>
                </div>
            </div>
        );}
}
export default ReturnAndComplain;
