import React from "react";
import './App.css'
import {Element, Events, scroller} from "react-scroll";
class PageHeader extends React.Component{
    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    render() {
        this.scrollTo()
        return (
            <Element name="scroll-to-element" className="element">
            <div className="page-header">
                <h1><span className="border-bottom">{this.props.header}</span></h1>
            </div>
            </Element>
        )
    }
}
export default PageHeader


