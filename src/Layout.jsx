import {Routes, Route} from "react-router-dom";
import {Navigation} from "./components/Navigation/Navigation.jsx";
import {QRCodeGenerator} from './components/Generate/QRCodeGenerator.jsx'
import {QRCodeScanner} from "./components/Scan/QRCodeScanner.jsx";

const Layout = () => {
    return (
        <div>
            <Navigation/>
            <Routes>
                <Route path="/generate" element={<QRCodeGenerator/>}/>
                <Route path="/scan" element={<QRCodeScanner/>}/>
            </Routes>
        </div>
    )
}
export {Layout}