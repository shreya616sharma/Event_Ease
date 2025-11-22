import './css/App.css'
import ClubsCard from './components/clubsCard.jsx'
import Home from './pages/Home.jsx'
import {Routes, Route} from "react-router-dom"
import Favourite from './pages/favourite.jsx'
import Navbar from './components/Navbar.jsx'
import { ClubProvider } from './contexts/ClubContext.jsx'

function App() {
  return (
    <ClubProvider>
      <Navbar/>
    <main className="main-content">
      <Routes> 
        <Route path = '/clubs' element ={<Home />} />
        <Route path='/' element ={<Home />} />
        <Route path='/favourite' element ={<Favourite />} />
      </Routes> 
      </main> 
      </ClubProvider>
    )
}

export default App 