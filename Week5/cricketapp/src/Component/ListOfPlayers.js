import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 82 },
        { name: "Rohit Sharma", score: 56 },
        { name: "Shubman Gill", score: 74 },
        { name: "KL Rahul", score: 43 },
        { name: "Hardik Pandya", score: 65 },
        { name: "Ravindra Jadeja", score: 28 },
        { name: "Ravichandran Ashwin", score: 19 },
        { name: "Jasprit Bumrah", score: 12 },
        { name: "Mohammed Siraj", score: 9 },
        { name: "Kuldeep Yadav", score: 15 },
        { name: "Mohammed Shami", score: 11 }
    ];
    
    return (
        <div>
            <h2>List of Players</h2>

            {
                players.map((item, index) => {
                    return (
                        <div key={index}>
                            <li>
                                Mr. {item.name}
                                <span> {item.score}</span>
                            </li>
                        </div>
                    );
                })
            }

        </div>
    );


        let players70 = [];

    players.map((item) => {
        if (item.score < 70) {
            players70.push(item);
        }
    });

    return (
        <div>
            <h2>Players with Score Below 70</h2>

            {
                players70.map((item, index) => (
                    <div key={index}>
                        <li>
                            Mr. {item.name}
                            <span> {item.score}</span>
                        </li>
                    </div>
                ))
            }
        </div>
    );
}

export default ListofPlayers;