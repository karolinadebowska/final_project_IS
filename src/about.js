import React from 'react';
import './App.css'
import PageHeader from "./pageHeader";
import Instagram from "./instagram";

class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title:'O nas'
        }
    }
    render() {
        const text = <div>
            <p>Cześć!
                <br/>
                Z tej strony dwie młode i pełne ambicji dziewczyny, które starają się patrzeć na świat przez różowe okulary i
                powojować trochę w tym dość mało ekologicznym i zwariowanym świecie.
                KaNa to takie nasze pierwsze dziecko, któremu poświęcamy masę czasu i zaangażowania, a ono zwraca
                nam to wszystko z nadwyżką!
            </p>
            <p>
                KaNa Eco powstała, by każdy z Was mógł wdrożyć w życie małe zmiany, w trosce o planetę. Żeby małe zmiany były
                dzięki nam proste i przyjemne. Daleko nam do perfekcji, ale wierzymy w małe kroki i
                dokonywanie lepszych wyborów na co dzień. Chęci mamy dużo, motywacji jeszcze więcej, doświadczenie też niczego
                sobie ! :)
            </p>
            <p>
                Możecie znaleźć tu robione przez nas ręcznie produkty ekologiczne i z recyklingu.
                Staramy się stworzyć minimalistyczne, a jednocześnie oryginalne rzeczy!
                Jeśli jak i my nie chcesz używać jednorazowych toreb, plastikowych szczoteczek i innych produktów, które
                zaśmiecają nam NASZ DOM- Ziemię, to jesteś w dobrym miejscu. Teraz tylko my mamy nadzieję, że trafimy w
                Wasze gusta:)
            </p>
            <p>
                Pamiętajmy, nie bądźmy obojętni na losy naszej planety i przyszłych pokoleń.. Zmiany zacznijmy od siebie,
                własnym przykładem pokażmy innym że Oni również mogą coś zmienić, nawet najmniejszy krok ma znaczenie.
                Pragniemy byście wsparli nasze działania i również zaczęli (a jeśli już to robicie, to CUDOWNIE!) uświadamiać
                rodzinę, znajomych jak ważna jest ekologia, dbanie o swój kawałek Ziemi.
            </p>
            <div>
                <br/>
                <h2>Naturalne surowce</h2>
                <p>Materiały, które wykorzystujemy do tworzenia naszych produktów są jak najbardziej ekologiczne; przede
                    wszystkim pochodzenia naturalnego, głównie materiały bawełniane i bambusowe czy lniane.
                </p>
            </div>
            <div>
                <br/>
                <h2>Zero-waste</h2>
                <p>Tworzymy również z materiałów z recyklingu -wtedy materiały nie zawsze są pochodzenia naturalnego,
                    natomiast tutaj ekologia tkwi w tym, że wykorzystujemy materiały, które w innych firmach są zwyczajnym
                    “odpadem”. Takim podejściem przyczyniamy się do zmniejszenia ilości odpadów i tworzymy z tego nowe,
                    oryginalne produkty!
                </p>
            </div>
            <div>
                <br/>
                <h2>Ekologiczne pakowanie</h2>
                <p> Paczki które do was wysyłamy pakujemy w papierowe koperty z szarego papieru bądź kartony z drugiej ręki.
                    Zabezpieczamy je jedynie taśmą papierową, zaś w ramach ozdoby na paczkach stemplujemy nasze logo!
                </p>
            </div>
        </div>
        return (
            <div className='parent'>
                <div className='container m-5'>
                    <PageHeader header={this.state.title}/>
                    <br/>
                    <div>{text}</div>
                </div>
                <Instagram/>
            </div>
        )
    }
}
export default About