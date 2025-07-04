import { Scanner } from '@yudiel/react-qr-scanner';
import {useState} from "react";
import {SCAN_DATA} from '../../constants.js'

import './QRCodeScanner.css';

export const QRCodeScanner = () => {
    const [resultScannerText, setResultScannerText] = useState('')
    const settings = {
        finder: false,
    }
    const scanHandler = (result) => {
        setResultScannerText(result[0]?.rawValue);
        const preData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
        localStorage.setItem(SCAN_DATA, JSON.stringify([...preData, result[0]?.rawValue]));
    }

    return (
        <div className='scanner-container'>
            <h2 className='qr-desc header-history'>Наведите камеру на QR-код</h2>
            <Scanner
                onScan={scanHandler}
                components={settings}
                sound={false}
                styles={{container: {
                    width: 350,
                        margin: '0 auto',
                        borderRadius: '0.7rem',
                        border: '2px solid rgba(153, 50, 204, 1)',
                        marginTop: '1rem'}}}
            />
            {resultScannerText && <h2 className='result-desc'>Результат сканирования:</h2>}
            {resultScannerText && <p className='result-scan'>{resultScannerText}</p>}
        </div>
    )
}