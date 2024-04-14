import React, { useState } from "react";

export default function Textform(props) {
  const handleUPClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase", "succesful");
  };

  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const handleLOClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase", "succesful");
  };
  
const handleCopy=()=>{
  var copyText = document.getElementById("myBox");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  props.showAlert("Copied text", "succesful");
}

  const handleclearClick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared", "succesful");
  };
  const [text, setText] = useState("Write text here");
  return (
    <>
      <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>

        <div className="mb-3"></div>

        <textarea
          className="form-control"
          value={text}
          onChange={handleonChange} style ={{backgroundColor:props.mode==='dark'?'grey':'white',
          color:props.mode==='dark'?'white':'black'}}
          id="myBox"
          rows="3"
        ></textarea>
        <button className="btn btn-primary mx-2" onClick={handleUPClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLOClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy text
        </button>
      </div>
      <div className="container my-2" style = {{color: props.mode==='dark'?'white':'black'}}>
      
        <h1>Summary</h1>
        <p>
          {text.split(" ")}word and {text.length}characters
        </p>
        <p>{0.008 * text.split(" ").length} Read Minutes</p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
