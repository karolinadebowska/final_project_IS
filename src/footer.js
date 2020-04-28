import React from 'react';
import './App.css';
import App from './App'
import NavFooter from './navFooter'

function Footer(){
    return(
    <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Footer</h5>
                    <p>Co tu chcecie zamiescic? </p>
                </div>
                <hr className="clearfix w-100 d-md-none pb-3"></hr>
                  <NavFooter/>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Kontakt</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://www.facebook.com/kana.eco/" target="_blank" className="btn btn-social-icon btn-facebook" style={{"margin-bottom":'5px'}}>
                                    <span style={{"color":'white'}} className="fa fa-facebook"></span>
                                </a>
                                <a href="https://www.instagram.com/kana.eco/" target="_blank" className="btn btn-social-icon btn-instagram" style={{"margin-bottom":'5px',"margin-left":'10px'}}>
                                    <span style={{"color":'white'}} className="fa fa-instagram"></span>
                                </a>
                            </li>
                            <li>
                                <p><span className="fas fa-envelope"></span>  kana.ecobag@gmail.com</p>
                            </li>
                            <li>
                                <p><span className="fas fa-phone"></span>  506 696 696</p>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="#">Kana.eco</a>
        </div>
    </footer>
    );
}
export default Footer;