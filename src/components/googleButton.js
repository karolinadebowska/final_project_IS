import {googleButton} from './consts'
import React from 'react'
import SignInPage from "./signIn";
class Google extends React.Component{
    render() {
        return (
            <div>
                <SignInPage/>
            </div>
        );
    }
}
export default Google;