import React from 'react';
import './App.css';
import NavFooter from './navFooter'

class Footer extends React.Component {
    render() {
        const info =
            <div className="col-md-6 mt-md-0 mt-3">
                <h4 className="text-uppercase">...</h4>
                <p>
                    Kana.eco stworzyłyśmy z myślą o naszej planecie, by każdy z nas małymi krokami mógł przenieść się
                    w świat ekologii. Posiadamy produkty ekologiczne i produkty z recyklingu. Rozgość się u nas!
                    Życzymy miłych zakupów
                </p>
            </div>

        const contact =
            <div>
                <h5 className="text-uppercase">Kontakt</h5>
                <ul className="list-unstyled">
                    <li>
                        <a href="https://www.facebook.com/kana.eco/"
                           className="btn btn-social-icon btn-facebook" style={{"marginBottom": '5px'}}>
                            <span style={{"color": 'white'}} className="fa fa-facebook"></span>
                        </a>
                        <a href="https://www.instagram.com/kana.eco/"
                           className="btn btn-social-icon btn-instagram"
                           style={{"marginBottom": '5px', "marginLeft": '10px'}}>
                            <span style={{"color": 'white'}} className="fa fa-instagram"></span>
                        </a>
                    </li>
                    <li>
                        <p><span className="fas fa-envelope"></span> kana.ecobag@gmail.com</p>
                    </li>
                    <li>
                        <p><span className="fas fa-phone"></span> 506 696 696</p>
                    </li>
                </ul>
            </div>
    return(
        <footer className="page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    {info}
                    <hr className="clearfix w-100 d-md-none pb-3"></hr>
                    <NavFooter/>
                    <div className="col-md-3 mb-md-0 mb-3">
                        {contact}
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="#">Kana.eco</a>
            </div>
        </footer>
        )
    }
}
export default Footer;