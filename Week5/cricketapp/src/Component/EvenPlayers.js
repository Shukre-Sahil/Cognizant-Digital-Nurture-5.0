import React from "react";

export function EvenPlayers({ players }) {

    const [, second, , fourth, , sixth, , eighth, , tenth] = players;

    return (
        <div>
            <h2>Even Team Players</h2>

            <li>Second: {second}</li>
            <li>Fourth: {fourth}</li>
            <li>Sixth: {sixth}</li>
            <li>Eighth: {eighth}</li>
            <li>Tenth: {tenth}</li>
        </div>
    );
}