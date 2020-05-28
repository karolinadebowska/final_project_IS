import React from 'react'
import * as emailjs from 'emailjs-com'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import ImageUpload from "./ImageUpload";
import ThankYouForm from "./ThankYouForm";

class Complaint extends React.Component {
    constructor(props) {
        super(props);
        this. state = {
            name: '',
            surname:'',
            email: '',
            phone:'',
            message: '',
            street:'',
            number:'',
            city:'',
            zipCode:'',
            productName:'',
            numOrder:'',
            dateOrder:'',
            photo:'',
            redirect:false
        }
        this.child = React.createRef();
    }
    uploadPicture(id){
        this.child.current.handleUpload('reklamacja',id);
    }
    submit(){
        const {name,surname,email,phone, message, street, number, city, zipCode, productName, numOrder, dateOrder,photo} = this.state
        let templateParams = {
            from_name: email,
            name: name,
            email: email,
            phone: phone,
            message: message,
            street:street,
            number:number,
            city:city,
            zipCode:zipCode,
            productName:productName,
            numOrder:numOrder,
            dateOrder:dateOrder,
            surname:surname,
            photo:photo
        }

        emailjs.send(
            process.env.REACT_APP_SERVER_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_USER_ID
        )
         this.resetForm()
    }
    handleSubmit(e) {
        e.preventDefault()
        this.uploadPicture(this.state.numOrder)
    }
    callbackFunction = (childData) => {
        this.setState({photo: childData})
        this.submit()
    }
    resetForm() {
        this.setState({
            name: '',
            surname:'',
            email: '',
            phone:'',
            message: '',
            street:'',
            number:'',
            city:'',
            zipCode:'',
            productName:'',
            numOrder:'',
            dateOrder:'',
            redirect:true
        })
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }
    render() {
        if(this.state.redirect===false) {
            return (
                <>
                    <Form id="complaint" onSubmit={this.handleSubmit.bind(this)} encType="multipart/form-data"
                          method="post">
                        <h2>Zgloszenie reklamacji</h2>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <FormGroup controlid="formBasicName">
                                    <Label className="text-muted">Imie &#42;</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'name')}
                                        placeholder="Imie"
                                        required
                                    />
                                </FormGroup>
                            </div>
                            <div className="form-group col-md-6">
                                <FormGroup controlid="formBasicSurname">
                                    <Label className="text-muted">Nazwisko &#42;</Label>
                                    <Input
                                        type="text"
                                        name="surname"
                                        value={this.state.surname}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'surname')}
                                        placeholder="Nazwisko"
                                        required
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <FormGroup controlid="formBasicEmail">
                                    <Label className="text-muted">Adres e-mail &#42;</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'email')}
                                        placeholder="adres e-mail"
                                        required
                                    />
                                </FormGroup>
                            </div>
                            <div className="form-group col-md-6">
                                <FormGroup controlid="formBasicPhone">
                                    <Label className="text-muted">Telefon kontaktowy &#42;</Label>
                                    <Input
                                        type="tel"
                                        name="phone"
                                        value={this.state.phone}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'phone')}
                                        placeholder="Telefon kontaktowy"
                                        required
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <h4>Adres:</h4>
                        <div className="form-row">
                            <div className="form-group col-md-5">
                                <FormGroup controlid="formBasicStreet">
                                    <Label className="text-muted">Ulica &#42;</Label>
                                    <Input
                                        type="text"
                                        name="street"
                                        value={this.state.street}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'street')}
                                        placeholder="Ulica"
                                        required
                                    />
                                </FormGroup>
                            </div>
                            <div className="form-group col-md-1">
                                <FormGroup controlid="formBasicNumber">
                                    <Label className="text-muted">Numer &#42;</Label>
                                    <Input
                                        type="number"
                                        name="number"
                                        value={this.state.number}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'number')}
                                        placeholder="Numer"
                                        required
                                    />
                                </FormGroup>
                            </div>
                            <div className="form-group col-md-3">
                                <FormGroup controlid="formBasicCity">
                                    <Label className="text-muted">Miejscowosc &#42;</Label>
                                    <Input
                                        type="text"
                                        name="city"
                                        value={this.state.city}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'city')}
                                        placeholder="Miejscowosc"
                                        required
                                    />
                                </FormGroup>
                            </div>
                            <div className="form-group col-md-2">
                                <FormGroup controlid="formBasicZipCode">
                                    <Label className="text-muted">Kod pocztowy &#42;</Label>
                                    <Input
                                        type="text"
                                        name="zipCode"
                                        value={this.state.zipCode}
                                        className="text-primary"
                                        title="Format xx-xxx"
                                        pattern="^[0-9]{2}-[0-9]{3}$"
                                        onChange={this.handleChange.bind(this, 'zipCode')}
                                        placeholder='xx-xxx'
                                        required
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <FormGroup controlid="formBasicProductName">
                                    <Label className="text-muted">Nazwa zakupionego przedmiotu &#42;</Label>
                                    <Input
                                        type="text"
                                        name="productName"
                                        value={this.state.productName}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'productName')}
                                        placeholder="Przedmiot"
                                        required
                                    />
                                </FormGroup>
                            </div>
                            <div className="form-group col-md-2">
                                <FormGroup controlid="formBasicNumOrder">
                                    <Label className="text-muted">Numer zamowienia &#42;</Label>
                                    <Input
                                        type="number"
                                        name="numOrder"
                                        value={this.state.numOrder}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'numOrder')}
                                        placeholder=""
                                        required
                                    />
                                </FormGroup>
                            </div>
                            <div className="form-group col-md-3">
                                <FormGroup controlid="formBasicDateOrder">
                                    <Label className="text-muted">Data zlozenia zamowienia &#42;</Label>
                                    <Input
                                        type="date"
                                        min="2020-01-01"
                                        name="dateOrder"
                                        value={this.state.dateOrder}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'dateOrder')}
                                        placeholder="DD/MM/YYYY"
                                        required
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <FormGroup controlid="formBasicMessage">
                            <Label className="text-muted">Przyczyna reklamacji &#42;</Label>
                            <Input
                                type="textarea"
                                name="message"
                                className="text-primary"
                                value={this.state.message}
                                onChange={this.handleChange.bind(this, 'message')}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <label className="text-muted">Dodaj zdjecie produktu (rozmiar pliku nieprzekraczajacy
                                50Kb)</label>
                            <ImageUpload required ref={this.child} url={this.callbackFunction} complaint={true}/>
                        </FormGroup>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </>
            )
        }
        else {
            return(
            <ThankYouForm/>
            )
        }

    }
}
export default Complaint;