import React, { useState } from "react";
import Button from "./Button.js";
import pic44 from "./pic44.jpg";
import "./App.css";
import "./Calculator.css";

function KeyPadComponent(props) {
  const [text1, setText] = useState("");
  const [showImage, setShowImage] = useState(false); // For "Show Me" functionality
  const [squareResult, setSquareResult] = useState(null); // For "Square" functionality

  const ClickHandle = (e) => {
    if (e.target.value === "C") {
      setText("");
    } else if (e.target.value === "=") {
      setText(eval(text1));
      alert(eval(text1));
    } else {
      setText(text1 + e.target.value);
    }
  };

  const handleSquare = () => {
    const number = parseFloat(text1);
    if (!isNaN(number)) {
      const square = number ** 2;
      setSquareResult(square);
      alert(`The square of ${number} is ${square}`);
    } else {
      alert("Please enter a valid number to calculate its square.");
    }
  };

  const toggleImage = () => {
    setShowImage(pic44);
  };

  return (
    <div className="Calculator">
     
      <div className="screen-row">
        <input type="text" readOnly value={text1} />
      </div>

     
      <div>
        <Button label="(" ClickHandle={ClickHandle} />
        <Button label="CE" ClickHandle={ClickHandle} />
        <Button label=")" ClickHandle={ClickHandle} />
        <Button label="C" ClickHandle={ClickHandle} />
      </div>

      <div>
        <Button label="1" ClickHandle={ClickHandle} />
        <Button label="2" ClickHandle={ClickHandle} />
        <Button label="3" ClickHandle={ClickHandle} />
        <Button label="+" ClickHandle={ClickHandle} />
      </div>

      <div>
        <Button label="4" ClickHandle={ClickHandle} />
        <Button label="5" ClickHandle={ClickHandle} />
        <Button label="6" ClickHandle={ClickHandle} />
        <Button label="-" ClickHandle={ClickHandle} />
      </div>

      <div>
        <Button label="7" ClickHandle={ClickHandle} />
        <Button label="8" ClickHandle={ClickHandle} />
        <Button label="9" ClickHandle={ClickHandle} />
        <Button label="*" ClickHandle={ClickHandle} />
      </div>

      <div>
        <Button label="." ClickHandle={ClickHandle} />
        <Button label="0" ClickHandle={ClickHandle} />
        <Button label="=" ClickHandle={ClickHandle} />
        <Button label="/" ClickHandle={ClickHandle} />
      </div>

      {/* Additional Buttons */}
      <div>
        <Button label="Square" ClickHandle={handleSquare} />
        <Button label="Show Me" ClickHandle={toggleImage} />
      </div>

      {/* Display Results */}
      {squareResult !== null && <h2>Square Result: {squareResult}</h2>}

      {/* Display Image */}
      {showImage && (
        <div>
          <img
            src={pic44}
           
            style={{ width: "200px", height: "auto", marginTop: "10px" }}
          />
        </div>
      )}
    </div>
  );
}

export default KeyPadComponent;
