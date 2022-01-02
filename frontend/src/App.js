import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/global.scss'

import { Home }  from "./pages/Home";
import { AboutMe }  from './pages/AboutMe';
import { Skills } from './pages/Skills'
import { Project } from './pages/Project'
import { Contact } from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
