import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ReservationsList } from './features/Reservations';
function App() {
    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        <div>
            <ReservationsList/>
            <BrowserRouter>
                <Routes>
                    <Route path='/test' element={<ReservationsList />} />
                    <Route path='/test1' element={<ReservationsList />}/>
                </Routes>
            </BrowserRouter>
        </div>
        </div>
    );
}

export default App;
