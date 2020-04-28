import React from 'react';

class ClassComponent extends React.Component {

    /**
     * Called when the class is created initiall
     * @param props
     */
    constructor(props) { // Inside of a class we don't need the function keyword or a fat arrow.
        super(props); // Send props to it's superclass React.Component

        this.state = { // Need to set an inital State... more on this later.
            count: 0
        };

        // Always a good idea to bind your methods so THIS always refers to the class and not the function
        // it was called from.
        this.updateCount = this.updateCount.bind(this);

        window.setInterval(this.updateCount, 1000);
    }

    // Callback function for window.setInterval
    updateCount () {
        let { count } = this.state;   // ES6 Decounstructor. Pulls this.state.count, and assigns it to new count variable
        count++;
        this.setState({ count }); // ES6 Object Constructor. If we have a variable named count, this equals out to
        // { count: count }
    }

    /**
     * Should return JSX.
     * Essentially the sole part of a functional component
     */
    render () {
        const { count } = this.state; // ES6 Decounstructor. Pulls this.state.count, and assigns it to new count variable

        return <h2>Count is: { count } </h2>
    }

}

// Need to export any component not in index.js
export default ClassComponent;