import {useState} from 'react'
import {QrReader} from 'react-qr-reader'
import Navbar from '../components/Navbar'

function Scan(){
    const [data, setData] = useState('No result');
    
    return(
        <div>
            <Navbar/>
            this is the scanning page
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
      <p>{data}</p>
        </div>
    )
}

export default Scan;