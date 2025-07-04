import {Routes, Route} from "react-router-dom";
import {Navigation} from "./components/Navigation/Navigation.jsx";
import {QRCodeGenerator} from './components/Generate/QRCodeGenerator.jsx'
import {QRCodeScanner} from "./components/Scan/QRCodeScanner.jsx";
import {GenerateHistory} from "./components/History/GenerateHistory.jsx";
import {ScanHistory} from "./components/History/ScanHistory.jsx";

const Layout = () => {
    return (
        <div>
            <Navigation/>
            <Routes>
                <Route path="/generate" element={<QRCodeGenerator/>}/>
                <Route path="/scan" element={<QRCodeScanner/>}/>
                <Route path="/genHistory" element={<GenerateHistory/>}/>
                <Route path="/scanHistory" element={<ScanHistory/>}/>
            </Routes>
        </div>
    )
}
export {Layout}