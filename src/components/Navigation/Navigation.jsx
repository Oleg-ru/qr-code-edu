import {Link} from "react-router-dom";
import './Navigation.css';

export const Navigation = () => {
    return (
        <nav className='navigation-container'>
            <Link to="/generate">Генерировать QR-код</Link>
            <Link to="/scan">Сканировать QR-код</Link>
            <Link to="/genHistory">История генерирования</Link>
            <Link to="/scanHistory">История сканирования</Link>
        </nav>
    );
}