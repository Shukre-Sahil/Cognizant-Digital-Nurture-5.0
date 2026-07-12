import './App.css';

import ListOfPlayers from "./Component/ListOfPlayers";
import Scorebelow70 from "./Component/Scorebelow70";
import { OddPlayers } from "./Component/OddPlayers";
import { EvenPlayers } from "./Component/EvenPlayers";
import ListofIndianPlayers from "./Component/ListofIndianPlayers";
import { IndianPlayers } from "./Component/IndianPlayers";

function App() {

    const players = [
        { name: "Virat Kohli", score: 90 },
        { name: "Rohit Sharma", score: 45 },
        { name: "Shubman Gill", score: 78 },
        { name: "KL Rahul", score: 67 },
        { name: "Hardik Pandya", score: 88 },
        { name: "Ravindra Jadeja", score: 52 },
        { name: "R Ashwin", score: 40 },
        { name: "Jasprit Bumrah", score: 25 },
        { name: "Mohammed Siraj", score: 18 },
        { name: "Kuldeep Yadav", score: 60 },
        { name: "Mohammed Shami", score: 30 }
    ];

    const IndianTeam = [
        "Virat Kohli",
        "Rohit Sharma",
        "Shubman Gill",
        "KL Rahul",
        "Hardik Pandya",
        "Ravindra Jadeja",
        "R Ashwin",
        "Jasprit Bumrah",
        "Mohammed Siraj",
        "Kuldeep Yadav",
        "Mohammed Shami"
    ];

    var flag = true;

    if (flag === true) {
        return (
            <div>

                <h1>List of Players</h1>
                <ListofPlayers players={players} />

                <hr />

                <h1>List of Players having Scores Less than 70</h1>
                <Scorebelow70 players={players} />

            </div>
        );
    } else {
        return (
            <div>

                <h1>Indian Team</h1>

                <h2>Odd Players</h2>
                <OddPlayers players={IndianTeam} />

                <hr />

                <h2>Even Players</h2>
                <EvenPlayers players={IndianTeam} />

                <hr />

                <h1>List of Indian Players Merged</h1>
                <ListofIndianPlayers IndianPlayers={IndianPlayers} />

            </div>
        );
    }
}

export default App;