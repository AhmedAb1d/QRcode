import {useState} from 'react'
import {QrReader} from 'react-qr-reader'
import Navbar from '../components/Navbar'
import '../styles/App.css';

function Scan(){
    const [data, setData] = useState('No result');
    
    return(
        <div>
            <Navbar/>
            <div className='scanner'>
            <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
            </div>
      <p>{data}</p>
        </div>
    )
}

export default Scan;