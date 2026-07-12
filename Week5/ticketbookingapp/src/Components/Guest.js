import React from "react";

function Guest() {
    return (
        <div>
            <h2>Welcome Guest!</h2>

            <h3>Available Flights</h3>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>AI101</td>
                        <td>Mumbai</td>
                        <td>Delhi</td>
                    </tr>

                    <tr>
                        <td>AI202</td>
                        <td>Chennai</td>
                        <td>Bangalore</td>
                    </tr>
                </tbody>
            </table>

            <p>Please login to book tickets.</p>

        </div>
    );
}

export default Guest;