import React, { useState } from 'react';



export default function TextForm(props) {



    const handleUpClick = () => {

        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Upper case", "success");
    }

    const handleLpClick = () => {

        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lower case", "success");
    }


    const handleOnChange = (event) => {
        setText(event.target.value);


    }

    const handleExtraSpace = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra space has been removed", "success");
    }

    const handleCopy = () => {
        props.showAlert("Text copied", "success");
        navigator.clipboard.writeText(text);

    }


    const [text, setText] = useState(``);
    // text = "new text"; //incorrect way to set text
    // setText("new text"); //correct way to set text

    const onClear = () => {
        setText("");
        props.showAlert("Text cleared", "success");
        props.color("danger");

    }


    return (
        <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <h2 className='mb-2' >{props.heading}</h2>
            <div className="mb-3">

                <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#1b1b32' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>

            <div>
                <button disabled={text.length === 0} className={`btn btn-primary mx-1 my-1`} style={{ backgroundColor: props.color }} onClick={handleUpClick} >  convert to UpperCase</button>
                <button disabled={text.length === 0} className={`btn btn-primary mx-1 my-1`} style={{ backgroundColor: props.color }} onClick={handleLpClick} >  convert to LowerCase</button>
                <button disabled={text.length === 0} className={`btn btn-primary mx-1 my-1`} style={{ backgroundColor: props.color }} onClick={onClear}>  Clear</button>
                <button disabled={text.length === 0} className={`btn btn-primary mx-1 my-1`} style={{ backgroundColor: props.color }} onClick={handleCopy}>  Copy</button>
                <button disabled={text.length === 0} className={`btn btn-primary mx-1 my-1`} style={{ backgroundColor: props.color }} onClick={handleExtraSpace}>  Extra Space Remover</button>
            </div>

            <div className="container my-3">
                <h1>Your text summary</h1>

                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words, {text.length} characters</p>
                <p>{(0.0033 * text.split(" ").filter((element) => { return element.length !== 0 }).length)} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>

            </div>

        </div>
    )
}
