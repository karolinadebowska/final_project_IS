import React from 'react'
import PhotoCard from "./PhotoCard";
import {Link} from "react-router-dom";
import {storage} from './Firebase/firebase'
import SideBar from './SideBar'
import {categories,link_categories} from './consts'
let listItems
class Main extends React.Component{
    constructor() {
        super();
        this.state = {
            torby: '',
            opaski: '',
            dom:'',
            akcesoria:'',
            frotki:''
        }
        this.getImage('torby')
        this.getImage('opaski')
        this.getImage('dom')
        this.getImage('akcesoria')
        this.getImage('frotki')
    }
    getImage (image) {
        let { state } = this
        storage.ref().child(`category_images/${image}.jpg`).getDownloadURL().then((url) => {
            state[image] = url
            this.setState(state)
        }).catch((error) => {
            // Handle any errors
        })
    }
    render(){
        const category_to_image= {
            'Hity KaNa':'',
            'Torby bawełniane': this.state.torby,
            'Akcesoria zero waste':this.state.akcesoria,
            'Dom zero waste':this.state.dom,
            'Woreczki':'',
            'Frotki':this.state.frotki,
            'Opaski':this.state.opaski,
            'Świece sojowe':'',
            'Plakaty':'',
            'Wszystkie produkty':''};
        return(
            <div className='parent'>
                <div className='container m-5'>
                    <div className="row">
                    {listItems = categories.map((category, i) =>
                        <div className="col-md-6" key={i}>
                        <Link className="nav-link" style={{'display':'block'}}to={link_categories[i]} onClick={() => window.scrollTo(0, 400)}><span className="sr-only">(current)</span>
                                <PhotoCard photoSrc = {category_to_image[category]} name={category} displayPrice={false}/>
                        </Link>
                        </div>

                    )}
                    </div>
                    </div>
                <SideBar/>
            </div>
        )
    }
}
export default Main