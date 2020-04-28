import React from 'react';
import './App.css'
import PageHeader from './pageHeader'
import ContactUs from './complaint';

class ReturnAndComplain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'Zwroty i reklamacje'
        }
    }
    render(){
        const text = <div>
            <p>W celu dokonania zwrotu towaru prosimy o wysłanie zakupionych produktów wraz z wydrukowanym i wypełnionym <a href="/documents/FORLUMARZ-ZWROTU.docx" download>
                formularzem</a> zwrotu na adres:</p>
            <ul>
                <li>Natalia Dębowska</li>
                <li>ul. Wczasowa 8</li>
                <li>95-001 Cyprianów</li>
            </ul>
            <p>Przyjmujemy zwroty tylko nieużywanych i nie odpakowanych wcześniej produktów. Po otrzymaniu przesyłki i sprawdzeniu czy przedmioty nie zostały otwarte ani użyte przyjmiemy zwrot i zwrócimy Ci pieniądze. </p>
            <br/>
            <p>Nie przyjmujemy przesyłek wysłanych za pobraniem.
                Koszt wysyłki zwrotu oraz reklamacji pokrywa kupujący.</p>
            <p>W przypadku reklamacji prosimy o wypelnienie formularza ponizej</p>
        </div>

        return (
            <div className='container'>
                <PageHeader header={this.state.title}/>
                <div>{text}</div>
                <ContactUs/>
            </div>
        );}
}

export default ReturnAndComplain;
