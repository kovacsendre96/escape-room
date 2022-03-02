import React from 'react';
import Nav from './Components/Header/NavMenu/Nav';
import BookingPage from './Components/Pages/BookingPage/BookingPage';
import { Route, Routes} from 'react-router-dom';
import MainPage from './Components/Pages/MainPage/MainPage';
import NotFound from './Components/Pages/NotFound/NotFound';
import RoomsPage from './Components/Pages/RoomsPage/RoomsPage';
import Header from './Components/Header/Header';
import "./public/css/App.css";
import "./public/css/style.css";

function App() {
  const api = window.location.host
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <Routes>
        <Route path={`/escape-room`} element={<MainPage/>} />
        <Route path={`/escape-room/szobak`} element={<RoomsPage/>} />
        <Route path={`/escape-room/szobak/:room_name`} element={<BookingPage/>}/>
        <Route element={NotFound} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
