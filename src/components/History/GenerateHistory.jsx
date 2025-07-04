import {GENERATE_DATA} from '../../constants.js'
import {QRCodeCanvas} from 'qrcode.react';

import './GenerateHistory.css'

export const GenerateHistory = () => {

    const preDataGenerate = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
    let key = 0;

    return (
        <div>
            <h2 className='header-history'>История генераций QR-кода</h2>
            {preDataGenerate.map((text)=>(
                <div key={key++}>
                    <details className='details'>
                        <summary>{text.length > 15 ? text.substring(0,16) + '...' : text}</summary>
                        <div className='details-content'>
                            <h3>Текст для генерации:</h3>
                            <p>{text}</p>
                            <h3>QR-код на основе текста:</h3>
                            <p>{<QRCodeCanvas value={text} size={200} className='qr-code'/>}</p>
                        </div>
                    </details>
                </div>
            ))}
        </div>
    )
}