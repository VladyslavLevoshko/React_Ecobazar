import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.tsx'
import Body from './components/Body/Body.jsx'
import Footer from './components/Footer/Footer.jsx'
import Hamburger from './components/Header/Hamburger.tsx'
import Sidebar from './components/Header/Sidebar.tsx'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);


  return (
    <div>
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu}/>
      <Header isOpen={isOpen} toggleMenu={toggleMenu}/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
