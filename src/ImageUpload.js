import React, {Component} from 'react';
import {db,storage} from './Firebase/firebase';

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0
        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.updateSingleData=this.updateSingleData.bind(this)
    }
    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({image}));
        }
    }
    updateSingleData(id,photo){
        db.ref(`items/${id}`).update({
            photo,
        });
    }
    handleUpload = (id) => {

        const {image} = this.state;
        const uploadTask = storage.ref(`images/${id}/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                // progrss function ....
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({progress});
            },
            (error) => {
                // error function ....
                console.log(error);
            },
            () => {
                // complete function ....
                storage.ref(`images/${id}`).child(image.name).getDownloadURL().then(url => {
                    this.setState({url});
                    this.updateSingleData(id,url)
                })
            });
        return this.state.url
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
                <input type="file" onChange={this.handleChange}/>
            </div>
        )
    }
}

export default ImageUpload