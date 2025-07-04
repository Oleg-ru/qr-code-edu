import {SCAN_DATA} from "../../constants.js";
import './ScanHistory.css'

export const ScanHistory = () => {

    const preData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    let key = 0;
    return (
        <div>
            <h2 className='header-history'>История сканирований</h2>
            {preData.map((text)=>(
                <div key={key++}>
                    <details className='details'>
                        <summary>{text.length > 15 ? text.substring(0,16) + '...' : text}</summary>
                        <div className='details-content'>
                            <h3>Отсканированный текст:</h3>
                            <p>{text}</p>
                        </div>
                    </details>
                </div>
            ))}
        </div>
    )
}