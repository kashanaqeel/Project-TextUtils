import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handleLowClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
    }
    
    const handleClickClear=()=>{
        let newtext='';
        setText(newtext)
    }
    const handleCopy=()=>{
        var text= document.getElementById("box");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
    <div className='container'>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" id="box" value={text} onChange={handleOnChange} rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-2" onClick={handleClickClear}>Clear Text</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
  </div>
  <div className="container my-2"><h2>Your text summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
  </div>
  </>
  )
}
