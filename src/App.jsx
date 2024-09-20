
import { useState } from 'react'
import './App.css'
import Header from './components/common/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Home from './Pages/Home/Home'

function App() {
    const [communityOpen, setCommunityOpen] = useState(false)
  return (
    <>
        <Header/>
        <Home communityOpen={communityOpen}/>
        <NavBar communityOpen={communityOpen} setCommunityOpen={setCommunityOpen}/>
    </>
  )
}

export default App
