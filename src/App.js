import React from 'react';
import Nav from './Components/Header/NavMenu/Nav';
import {Route, Routes} from 'react-router-dom';
import MainPage from './Components/Pages/MainPage/MainPage';
import NotFound from './Components/Pages/NotFound/NotFound';
import RoomsPage from './Components/Pages/RoomsPage/RoomsPage';
import Header from './Components/Header/Header';
import BookingTableComponent from './Components/Pages/BookingTableComponent/BookingTableComponent';
import BookingPage from "./Components/Pages/BookingPage";
import Faq from "./Components/FixedSections/Faq";
import Contact from "./Components/FixedSections/Contact";
import Footer from "./Components/FixedSections/Footer";


function App() {
    const api = window.location.host;
    return (
        <React.Fragment>
            <Nav/>
            <Header/>
            <Routes>
                <Route path={`/escape-room`} element={<MainPage/>}/>
                <Route path={`/escape-room/szobak`} element={<RoomsPage/>}/>
                <Route path={`/escape-room/foglalas`} element={<BookingPage/>}/>
                <Route path={`/escape-room/szobak/:room_name`} element={<BookingTableComponent/>}/>
                <Route element={NotFound}/>
            </Routes>
            <Faq/>
            <Contact/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
