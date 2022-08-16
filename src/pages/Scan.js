import {useState} from 'react'
import QrReader from 'react-qr-code'

function Scan(){
    const [scanResultWebCam, setScanResultWebCam] =  useState('');
    const handleErrorWebCam = (error) => {
        console.log(error);
      }
      const handleScanWebCam = (result) => {
        if (result){
            setScanResultWebCam(result);
        }
       }
    return(
        <QrReader
        delay={300}
        style={{width: '100%'}}
        onError={handleErrorWebCam}
        onScan={handleScanWebCam}
        />
    )
}

export default Scan;