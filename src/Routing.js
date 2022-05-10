import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";


export default function Routing() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/Home" element={<Home />} />
                    <Route exact path="/About" element={<About />} />
                    <Route exact path="/Services" element={<Services />} />
                    <Route exact path="/Skills" element={<Skills />} />
                    <Route exact path="/Education" element={<Education />} />
                    <Route exact path="/Experience" element={<Experience />} />
                    <Route exact path="/Work" element={<Work />} />
                    <Route exact path="/Contact" element={<Contact />} />
    
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}