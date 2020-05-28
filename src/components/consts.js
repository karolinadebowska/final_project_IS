import React from "react";
import {Link} from "react-router-dom";
import logo from "./logo.svg";

export const categories= ['Promocje', 'Torby bawełniane', 'Akcesoria zero waste','Dom zero waste', 'Kosmetyki',
    'Frotki','Opaski','Świece sojowe','Plakaty','Inne','Wszystkie produkty'];
export const title_types = ['promocje','torby','akcesoria-zero-waste','dom-zero-waste','kosmetyki','frotki',
    'opaski','świece-sojowe','plakaty','inne','nasze-produkty']
export const link_categories = ['/produkty/promocje', '/produkty/torby', '/produkty/akcesoria-zero-waste','/produkty/dom-zero-waste',
    '/produkty/kosmetyki', '/produkty/frotki','/produkty/opaski','/produkty/świece-sojowe','/produkty/plakaty','/produkty/inne',
    '/produkty/nasze-produkty']

export const colors = ['nie aplikuje', 'żółty', 'złoty', 'zielony', 'wielobarwny', 'turkusowy', 'szary', 'srebrny',
    'różowy', 'pomarańczowy', 'niebieski', 'fioletowy', 'czerwony', 'czarny', 'brązowy', 'biały', 'beżowy']
//dictionary to change adres in link after /
export const dict_types = {
    'promocje': "promocje",
    'torby bawełniane':'torby',
    'akcesoria zero waste':'akcesoria-zero-waste',
    'dom zero waste':'dom-zero-waste',
    'kosmetyki':'kosmetyki',
    'frotki':'frotki',
    'opaski':'opaski',
    'świece sojowe':'świece-sojowe',
    'plakaty':'plakaty',
    'inne':'inne',
    'wszystkie produkty':'nasze-produkty'
};
export const text_about_page =
    <div>
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

export const opaski_descr=<p className="lead text-muted">Opaski często powstają z „odpadów” innych firm odzieżowych, które ratujemy przed  wyrzuceniem. Opaski poza tym, że pięknie zdobią nasze włosy i nadają charakter naszym stylizacjom, mogą również być niezastąpione podczas codziennej pielęgnacji twarzy. Świetnie wtrzymają włosy.</p>
export const frotki_descr = <p className="lead text-muted">Znajdziesz tu wiele oryginalnych produktów, co najważniejsze- Z RECYKLINGU!  W zgodzie z ideą zero waste - wykorzystujemy odpady z innych firm, byście mogli pomóc naszej planecie, a jednocześnie mieć coś pięknego. Nie  tylko świetnie wyglądają, zdobiąc nasze włosy, ale również sprawdzają się w roli „dodatku’ do stylizacji, jako „bransoleta” na rękę. </p>
export const dom_zw_descr = <p className="lead text-muted">Ekologiczne produkty dla domu dla całej rodziny.</p>
export const aces_zw_descr = <p className="lead text-muted">Znajdziesz tu wiele akcesoriów potrzebnych do codziennego użytku, dzięki którym będziesz żyć w zgodzie z naturą, nie zaśmiecając naszej planety.</p>
export const torby_descr = <p className="lead text-muted">Zawarty w nich minimalizm urzeknie każdego z Was, dzięki niemu będzie pasowała do każdej stylizacji. Posiadamy wyjątkowe torby, z własnoręcznie wykonanymi haftami jak również torby stemplowane. Torby bawełniane świetnie zastępują  nie tylko zakupowe, plastikowe torby, ale również świetnie sprawdzą się jako torba do codziennego użytku. Dodatkowym atutem  jest możliwość personalizacji toreb.</p>
export const kosmet_descr = <p className="lead text-muted">Każdą świece tworzymy ręcznie w małej pracowni, z dbałością o wszystkie szczegóły. Nasze świece składają się jedynie z ekologicznego, certyfikowanego wosku sojowego oraz naturalnych olejków eterycznych. Wosk sojowy topi się dłużej, dlatego świece sojowe posiadają do dwóch razy dłuższy czas palenia w porównaniu ze świecami parafinowymi. Naturalne właściwości wosku sojowego sprawiają, że nie zawiera on żadnych toksyn i nie uwalnia do otoczenia podczas spalania żadnych rakotwórczych substancji. </p>
export const świece_descr = <p className="lead text-muted">Każdą świece tworzymy ręcznie w małej pracowni, z dbałością o wszystkie szczegóły. Nasze świece składają się jedynie z ekologicznego, certyfikowanego wosku sojowego oraz naturalnych olejków eterycznych. Wosk sojowy topi się dłużej, dlatego świece sojowe posiadają do dwóch razy dłuższy czas palenia w porównaniu ze świecami parafinowymi. Naturalne właściwości wosku sojowego sprawiają, że nie zawiera on żadnych toksyn i nie uwalnia do otoczenia podczas spalania żadnych rakotwórczych substancji. </p>
export const plakat_descr = <p className="lead text-muted">Tworzone przez nas minimalistyczne plakaty ozdobią Twoją przestrzeń, nadadzą jej niepowtarzalnego charakteru.</p>
//description under slogan for each category
export const dic_find_descr_category = {
    'promocje': '',
    'torby':torby_descr,
    'akcesoria-zero-waste':aces_zw_descr ,
    'dom-zero-waste':dom_zw_descr,
    'kosmetyki':kosmet_descr,
    'frotki':frotki_descr,
    'opaski':opaski_descr,
    'świece-sojowe':świece_descr,
    'plakaty':plakat_descr,
    'nasze-produkty':'',
    'inne':'',
    'wszystkie produkty':''
}

export const logoDisplay =
    <Link className="nav-link" to='/'><span className="sr-only">(current)</span>
        <img src={logo} className="App-logo smaller"
             alt="logo"/>
    </Link>
export const googleButton =
    <button><div className="g-signin2" data-onsuccess="onSignIn">Zaloguj </div></button>

export const text_return_and_complain = <div>
    <p>W celu dokonania zwrotu towaru prosimy o wysłanie zakupionych produktów wraz z wydrukowanym i wypełnionym <a href="/documents/FORLUMARZ-ZWROTU.docx" download>
        formularzem</a> zwrotu na adres:</p>
    <ul>
        <li>Natalia Dębowska</li>
        <li>ul. Wczasowa 8</li>
        <li>95-001 Cyprianów</li>
    </ul>
    <p>Przyjmujemy zwroty tylko nieużywanych i nie odpakowanych wcześniej produktów. Po otrzymaniu przesyłki i sprawdzeniu czy przedmioty nie zostały otwarte ani użyte przyjmiemy zwrot i zwrócimy Ci pieniądze. </p>
    <br/>
    <p>Nie przyjmujemy przesyłek wysłanych za pobraniem.
        Koszt wysyłki zwrotu oraz reklamacji pokrywa kupujący.</p>
    <p>W przypadku reklamacji prosimy o wypelnienie formularza ponizej</p>
</div>