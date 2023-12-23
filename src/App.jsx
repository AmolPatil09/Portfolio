
import './App.css'
import Navbar from './component/Navbar'

import Footer from './component/Footer'

import All from './component/All'
function App() {
  

  return (
    <>
        <div className='bg-black min-h-screen h-auto'>
        <Navbar/>
        <All/>
        <Footer/>
        </div>
        
    </>
  )
}

export default App
