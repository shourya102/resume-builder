import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Builder from "./pages/Builder/Builder.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/builder" element={<Builder/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
