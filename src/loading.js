import React from 'react';
import logo from './logo.svg';
import load from './loadingAnimation.svg';
import './App.css';
import App from './App';

class Loading extends React.Component{
state = {
    redirect: false
}
    componentDidMount(){
        this.id = setTimeout(() => this.setState({redirect: true}), 2000)
    }
    componentWillUnmount(){
        clearTimeout(this.id)
    }
    render() {
        return (<div>
            {this.state.redirect
                ? <App/>
            : <div>
                    <header className="App-header">
                    <img style={{'display':'block'}} src={logo} className="App-logo" alt="logo" />
                    <img style={{'display':'block'}} src={load} className="load-animation" alt="loading" />
                </header>
            </div>}
        </div>)
    }
}
export default Loading;