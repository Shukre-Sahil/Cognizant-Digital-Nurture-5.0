import React, { useState } from "react";

function EventExamples() {

    const [count, setCount] = useState(0);

    // Increment
    const increment = () => {
        setCount(count + 1);
    };

    // Decrement
    const decrement = () => {
        setCount(count - 1);
    };

    // Say Hello
    const sayHello = () => {
        alert("Hello! Have a nice day.");
    };

    // Multiple Methods
    const handleIncrement = () => {
        increment();
        sayHello();
    };

    // Welcome
    const sayWelcome = (msg) => {
        alert(msg);
    };

    // Synthetic Event
    const onPress = (e) => {
        alert("I was clicked");
        console.log(e);
    };

    return (
        <div>

            <h2>Counter : {count}</h2>

            <button onClick={handleIncrement}>
                Increment
            </button>

            <button onClick={decrement}>
                Decrement
            </button>

            <br /><br />

            <button onClick={() => sayWelcome("Welcome")}>
                Say Welcome
            </button>

            <br /><br />

            <button onClick={onPress}>
                OnPress
            </button>

        </div>
    );
}

export default EventExamples;