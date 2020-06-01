import React from 'react'
import DetailPageDisplay from "./DetailPageDisplay";
import {Element, Events, scroller} from "react-scroll";
import {db} from "./Firebase/firebase";

class DetailPage extends React.Component{
    constructor() {
        super();
        this.state = {
            items: []
        }
        this.scrollTo=this.scrollTo.bind(this)
    }
    componentDidMount () {
        Events.scrollEvent.register('begin', function () {
        });
        Events.scrollEvent.register('end', function () {
        });
        console.log(this.props.match.params.id);
        const itemsRef = db.ref('items');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                if(this.props.match.params.id===item) {
                    newState.push({
                        id: item,
                        title: items[item].name,
                        description: items[item].description,
                        color: items[item].color,
                        type: items[item].type,
                        price: items[item].price,
                        photo: items[item].photo,
                        dateCreated: items[item].dateCreated
                    });
                }
            }
                this.setState({
                    items:newState
                });
        })
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
    render(){
        this.scrollTo()
        return (
            <Element name="scroll-to-element" className="element">
            <div>
                {this.state.items.map((item) => {
                    return(
                        <DetailPageDisplay item={item} key={item}/>
                    )
                })
                }
            </div>
                        </Element>
        )
    }
}
export default DetailPage;