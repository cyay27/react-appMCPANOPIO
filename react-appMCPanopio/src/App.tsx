import React, { useState } from "react";
import Alert from "./components/Alert";
import ExerciseButton from "./components/button";

function App() {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true); // Show alert when button is clicked
    };

    const handleClose = () => {
        setShowAlert(false); // Close alert
    };

    return (
        <div>
            <button onClick={handleClick}>My Button</button>
            {showAlert && (
                <Alert onClose={handleClose}>
                    My Alert!
                </Alert>
            )}
        </div>
    );
}

export default App;