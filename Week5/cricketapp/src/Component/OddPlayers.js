import React from "react";

export function OddPlayers({ players }) {

    const [first, , third, , fifth, , seventh, , ninth, , eleventh] = players;

    return (
        <div>
            <h2>Odd Team Players</h2>

            <li>First: {first}</li>
            <li>Third: {third}</li>
            <li>Fifth: {fifth}</li>
            <li>Seventh: {seventh}</li>
            <li>Ninth: {ninth}</li>
            <li>Eleventh: {eleventh}</li>
        </div>
    );
}