import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Resume from "./Components/Resume/Resume";
import { ResumeData } from './Components/ResumeData'


export default function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="Home" element={<Home />} />
                    <Route exact path="About" element={<About data={ResumeData.about} />} />
                    <Route exact path="Services" element={<Services />} />
                    <Route exact path="Skills" element={<Skills data={ResumeData.skills} />} />
                    <Route exact path="Education" element={<Education data={ResumeData.education}/>} />
                    <Route exact path="Experience" element={<Experience data={ResumeData.experience}/>} />
                    <Route exact path="Work" element={<Work />} />
                    <Route exact path="Contact" element={<Contact data={ResumeData.contact} />} />
                    <Route exact path="Resume" element={<Resume data={ResumeData} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}