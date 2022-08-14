import './App.css';
import {useState} from 'react';
import QRCode from 'react-qr-code';

function App() {
  const [firstname,setFirstname]=useState("");
  const [lastname,setLastname]=useState(""); 
  const [component,setComponent]=useState()
  const handleChange1 = e=>setFirstname(e.target.value);
  const handleChange2= e=>setLastname(e.target.value);
  const generate= ()=>{
    if (firstname.length<1 || lastname.length<1) 
      setComponent(<div>Don't leave the fields empty</div>)
    else
    setComponent(<QRCode
      level="Q"
      style={{ width: 256 }}
      value={JSON.stringify({
        firstname:{firstname},
        lastname:{lastname}
      })}
    />)
  }
  return (
    <div className="form">
      <input className="input" placeholder="Your Firstname" onChange={handleChange1}/><br></br>
      <input className="input" placeholder="Your Lastname" onChange={handleChange2}/><br></br>
      <button className="button" onClick={generate}>Generate QR code</button><br></br>
      {component}
    </div>
  );
}

export default App;
