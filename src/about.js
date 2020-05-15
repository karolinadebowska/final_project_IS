import React from 'react';
import './App.css'
import PageHeader from "./pageHeader";
import SideBar from './SideBar'
import {text_about_page} from './consts'

class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title:'O nas'
        }
    }
    render() {
        return (
            <div className='parent'>
                <div className='container m-5'>
                    <PageHeader header={this.state.title}/>
                    <br/>
                    <div>{text_about_page}</div>
                </div>
                <SideBar/>
            </div>
        )
    }
}
export default About