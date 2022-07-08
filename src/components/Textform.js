import React, {useState} from 'react'


export default function Textform(props) {
    const [text,setText] = useState('');
    const handleupClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleloClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleclClick=()=>{
        let newText=(" ");
        setText(newText);
    }

    const handlecoClick=()=>{
        let newText=document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleptClick=()=>{
        let newText=text.split(".");
        setText(newText.join(".\n"));
    }

    const handlereClick=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));;
    }

    const handleonChange=(event)=>{
        setText(event.target.value);
    }
  return (
    <>
    <div className="container mt-5">
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control my-3"value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-dark mx-2 my-2" onClick={handleupClick}>Convert to Uppercase</button>
        <button className="btn btn-dark mx-2 my-2" onClick={handleloClick}>Convert to Lowercase</button>
        <button className="btn btn-dark mx-2 my-2" onClick={handleptClick}>Convert to Points</button>
        <button className="btn btn-dark mx-2 my-2" onClick={handlereClick}>Remove extra spaces</button>
        <button className="btn btn-dark mx-2 my-2" onClick={handleclClick}>Clear Text</button>
        <button className="btn btn-dark mx-2 my-2" onClick={handlecoClick}>Copy Text</button>
    </div>
    <div className="container  mt-4">
        <h4 className="fw-bold">Text Summary</h4>
        {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters<br/>
        Average time taken to read - {text.split(/\s+/).filter((element)=>{return element.length!==0}).length*0.004} Minutes
    </div>
    <div className="container mt-4">
        <h4 className="fw-bold">Preview</h4>
        <p>{text.length>0?text:"Write text to preview"}</p>
    </div>
    </>
  )
}
