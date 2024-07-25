import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import { LanguageProvider } from "./Contexts/LanguageContext";

function App() {
    return (
        <div className="App">
            <LanguageProvider>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </LanguageProvider>
        </div>
    );
}

export default App;
