import './App.css'
import NavBar from './assets/components/FunctionalComponents/NavBar'
import Home from './assets/components/FunctionalComponents/Home'
import Contact from './assets/components/FunctionalComponents/Contact'
import Gallery from './assets/components/FunctionalComponents/Gallery'
import About from './assets/components/FunctionalComponents/About'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UseEffect from './assets/components/FunctionalComponents/UseEffect'
import UseRef from './assets/components/FunctionalComponents/UseRef'
import UseContext from './assets/components/FunctionalComponents/UseContext'

function App() {
  return (
      <div>
        
        <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/gallery" element={<Gallery/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/useeffect" element={<UseEffect/>}/>
              <Route path="/useref" element={<UseRef/>}/>
              <Route path="/usecon" element={<UseContext/>}/>
          </Routes>
        </BrowserRouter>
      
      </div>    
  )
};
export default App