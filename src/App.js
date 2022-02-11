import React from 'react';
import Nav from './Components/Header/NavMenu/Nav';
import BookingPage from './Components/Pages/BookingPage/BookingPage';
import { Route, Routes} from 'react-router-dom';
import MainPage from './Components/Pages/MainPage/MainPage';
import NotFound from './Components/Pages/NotFound/NotFound';
import RoomsPage from './Components/Pages/RoomsPage/RoomsPage';


const host = window.location.host;
console.log(host);
function App() {
  return (
    <React.Fragment>
      <Nav />
      <Routes>
        <Route path={`${host}/`} element={<MainPage/>} />
        <Route path={`${host}/szobak`} element={<RoomsPage/>} />
        <Route path={`${host}/szobak/:room_name`} element={<BookingPage/>} />
        <Route element={NotFound} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
