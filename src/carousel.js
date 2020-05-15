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
        let count = this.state.count;
        count++;
        if(count===5)
            count=0
        this.setState({ count });
    }

    render() {
        const pics = [slide0, slide1, slide2,slide3,slide4];
        const { count } = this.state;
        return (<div>
            <section className="carousel" style={{'textAlign':'center'}}>
                <h3 id="title"> Przeciętny Polak wytwarza rocznie ponad 300 kg śmieci... chyba nie chcesz być
                    przeciętny? </h3>
                <img id="slide0" className="active" src={pics[count]} alt=''/>

            </section>
        </div>);
    }
}
export default Carousel;