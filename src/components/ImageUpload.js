import React, {Component} from 'react';
import {db,storage} from './Firebase/firebase';

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0,
            size:null
        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.addPictureReference=this.addPictureReference.bind(this)
    }
    validate(pic, size) {
        if (pic != null) {
            let image = pic.name
            // validation of file extension using regular expression before file upload
            if (!image.match(/(\.jpg|\.png|\.JPG|\.PNG|\.jpeg|\.JPEG)$/)) {
                alert("Zdjęcie musi być typu jpg, png, jpeg, ")
                return false;
            }
            // validation according to file size
            console.log(size)
            if (this.props.complaint && size > 50){
                alert("Zdjęcie nie może przekraczać 50 KB")
                return false;
            }
            return true;
        }
        return false
    }

    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            const size = e.target.files[0].size/1024
            this.setState(() => ({image,size}));
        }
    }
    addPictureReference(id,photo){
        console.log('urlInsideFun',id)
        db.ref(`items/${id}`).update({
            photo,
        });
    }
    handleUpload = (folder,id) => {
        console.log('ID',id)
        if(this.validate(this.state.image,this.state.size)===true) {
            const {image} = this.state;
            const uploadTask = storage.ref(`${folder}/${id}/picture.jpg`).put(image);
            uploadTask.on('state_changed',
                (snapshot) => {
                    // progress function ....
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    this.setState({progress});
                },
                (error) => {
                    // error function ....
                    console.log(error);
                },
                () => {
                    // complete function ....
                    storage.ref(`${folder}/${id}`).child('picture.jpg').getDownloadURL().then(url => {
                        console.log("url",url)
                        this.setState({url});
                        if(this.props.complaint===true)
                            this.props.url(this.state.url);
                        else{
                            console.log('weszlo')
                            this.addPictureReference(id, url)
                        }
                    })
                });

            return this.state.url
        }
    }
    render() {
        const style = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        };
        return (
            <div style={style}>
                <progress value={this.state.progress} max="100"/>
                <br/>
                <input type="file" id='file' onChange={this.handleChange}/>
            </div>
        )
    }
}

export default ImageUpload