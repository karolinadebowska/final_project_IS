import React from 'react';
import './carousel.css';
import slide0 from './images/1.png'
import slide1 from './images/2.png'
import slide2 from './images/3.png'
import slide3 from './images/4.png'
import slide4 from './images/5.png'

class Carousel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {count: 0};
        // Always a good idea to bind your methods so THIS always refers to the class and not the function
        // it was called from.
        this.updateCount = this.updateCount.bind(this);
        window.setInterval(this.updateCount, 3000);
    }
    updateCount () {
        let count = this.state.count;   // ES6 Decounstructor. Pulls this.state.count, and assigns it to new count variable
        count++;
        if(count==5)
            count=0
        this.setState({ count }); // ES6 Object Constructor. If we have a variable named count, this equals out to
        // { count: count }
    }

    render() {
        const pics = [slide0, slide1, slide2,slide3,slide4];
        const { count } = this.state; // ES6 Decounstructor. Pulls this.state.count, and assigns it to new count variable
        return (<div>
            <section className="carousel">
                <h1 id="title"> Przeciętny Polak wytwarza rocznie ponad 300 kg śmieci... chyba nie chcesz być
                    przeciętny? </h1>
                <img id="slide0" className="active" src={pics[count]}/>

            </section>
        </div>);
    }
}
export default Carousel;