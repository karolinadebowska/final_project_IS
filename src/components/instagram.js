import InstagramEmbed from 'react-instagram-embed';
import React from 'react';
import './App.css'
function Instagram() {
    return (
        <div className='insta'>
    <InstagramEmbed
        align='right'
        url='https://instagr.am/p/B7YfkGJpjH3/'
        maxWidth={320}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
    />
        </div>)
}
export default Instagram