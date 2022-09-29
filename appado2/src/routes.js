import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Cadcli from './pages/Cadcli';
import Sobre from './pages/Sobre';
import Conta from './pages/Conta';
import Finan from "./pages/Finan";
function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/cliente" element={<Cadcli />}></Route>
                <Route path="/sobre" element={<Sobre />}></Route>
                <Route path="/conta" element={<Conta />}></Route>
                <Route path="/financiamento" element={<Finan />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;