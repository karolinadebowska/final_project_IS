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
            frotki:'',
            palakaty:'',
            swiece:'',
            kosmetyki:'',
            inne:'',
            promocje:'',
            wszystko:''
        }
        this.getImage('torby')
        this.getImage('opaski')
        this.getImage('dom')
        this.getImage('akcesoria')
        this.getImage('frotki')
        this.getImage('plakaty')
        this.getImage('swiece')
        this.getImage('kosmetyki')
        this.getImage('inne')
        this.getImage('promocje')
        this.getImage('wszystko')
    }
    getImage (image) {
        let { state } = this
        storage.ref().child(`category_images/${image}.jpg`).getDownloadURL().then((url) => {
            state[image] = url
            this.setState(state)
        }).catch((error) => {
            state[image] = ''
            this.setState(
                state)
        })
    }
    render(){
        const category_to_image= {
            'Promocje':this.state.promocje,
            'Torby bawełniane': this.state.torby,
            'Akcesoria zero waste':this.state.akcesoria,
            'Dom zero waste':this.state.dom,
            'Kosmetyki':this.state.kosmetyki,
            'Frotki':this.state.frotki,
            'Opaski':this.state.opaski,
            'Świece sojowe': this.state.swiece,
            'Plakaty':this.state.plakaty,
            'Inne':this.state.inne,
            'Wszystkie produkty':this.state.wszystko};
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