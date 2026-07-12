import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Guest from "./Components/Guest";
import User from "./Components/User";

function App() {

    const [loggedIn, setLoggedIn] = useState(false);

    return (

        <div style={{ textAlign: "center", marginTop: "20px" }}>

            <h1>Ticket Booking App</h1>

            {
                loggedIn ? (
                    <div>
                        <button onClick={() => setLoggedIn(false)}>
                            Logout
                        </button>

                        <User />
                    </div>
                ) : (
                    <div>
                        <button onClick={() => setLoggedIn(true)}>
                            Login
                        </button>

                        <Guest />
                    </div>
                )
            }

        </div>

    );
}

export default App;
