import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
    
  };
  const [text, setText] = useState(" ");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "042743" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "042743",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lower Case
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => {
          return element.length !== 0
        }).length} words and {text.trim().length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => {
          return element.length !== 0
        }).length} Minutes Read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}
