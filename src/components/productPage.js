import React from 'react'
import Slogan from './slogan'
import './productPage.css'
import { db }  from './Firebase/firebase'
import {title_types} from "./consts";
import DisplayProducts from "./DisplayProducts";
import PromoPage from "./Promo/PromoPage";
import {Element, Events, scroller } from 'react-scroll'
let filteredResults
class Product extends React.Component{
    constructor() {
        super();
        this.state = {
            items: [],
            sortType:[]
        }
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
    // Function to Order results list
    orderBy(sortValue) {
        let sortedResults;
       if (sortValue==='asc') {
           sortedResults = filteredResults.sort(function (a, b) {
               let priceA = a.price;
               let priceB = b.price;
               if (priceA < priceB) {
                   return -1;
               }
               if (priceA > priceB) {
                   return 1;
               }
           });
       }
       else if(sortValue==='desc'){
       sortedResults =filteredResults.sort(function (a, b) {
            let priceA = a.price;
            let priceB = b.price;
            if (priceA < priceB) {
                return 1;
            }
            if (priceA > priceB) {
                return -1;
            }
        });
       }
       else if(sortValue==='az'){
       sortedResults =filteredResults.sort(function (a, b) {
               let nameA = a.title.toUpperCase();
               let nameB = b.title.toUpperCase();
               if (nameA < nameB) {
                   return -1;
               }
               if (nameA > nameB) {
                   return 1;
               }
           })}
        else if(sortValue==='za'){
           sortedResults =filteredResults.sort(function (a, b) {
               let nameA = a.title.toUpperCase();
               let nameB = b.title.toUpperCase();
               if (nameA < nameB) {
                   return 1;
               }
               if (nameA > nameB) {
                   return -1;
               }
           })
        }
        else if (sortValue==='new'){
           sortedResults =filteredResults.sort((a, b) => new Date(b.dateCreated)- new Date(a.dateCreated))
       }
        this.setState({
            items: sortedResults
        });
    }

    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
        });

        Events.scrollEvent.register('end', function () {
        });

        const itemsRef = db.ref('items');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    title: items[item].name,
                    description: items[item].description,
                    color:items[item].color,
                    type:items[item].type,
                    price:items[item].price,
                    photo:items[item].photo,
                    dateCreated:items[item].dateCreated
                });
            }
            this.setState({
                items: newState,
            });
            filteredResults=newState
        });
    }
    callbackFunction = (childData) => {
        this.setState({sortType: childData})
        this.orderBy(childData)
    }

    render(){
        this.scrollTo()
        const titlePage = this.props.match.params.id;
        const link_valid = title_types.includes(titlePage);
        return(
            <div>
                <Element name="scroll-to-element" className="element">
                <Slogan id='slogan'
                    title = {link_valid && titlePage}
                        sort = {this.callbackFunction}
                />
                </Element>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            {titlePage === 'promocje' ?
                                <PromoPage items={this.state.items}/>
                                :
                                <DisplayProducts items={this.state.items} titlePage={link_valid && titlePage}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Product