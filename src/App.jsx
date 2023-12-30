
import './App.css'

import Home from './component/Home.jsx'
import About from './component/About.jsx' 
import Works from './component/Works.jsx'
import Skills from './component/Skills.jsx'
import Contact from './component/Contact.jsx'
import All from './component/All'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {


  return (
    <>
        <div className='bg-black min-h-screen h-auto '>
        <BrowserRouter>
        <Routes>
          <Route path="/Portfolio/" element={<All/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="work" element={<Works />} />
            <Route path="skill" element={<Skills />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
        </div>
        
    </>
  )
}

export default App
