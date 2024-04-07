
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import DownBar from './components/DownBar/DownBar';
import About from './components/About/About';
import Portafolios from './components/Portafolios/Portafolios';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import axios from 'axios';
import Loading from './components/Loading/Loading';

import { useEffect, useState } from 'react';
axios.defaults.baseURL = 'https://webpersonal-production-cbc4.up.railway.app/'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  },[]);

  return (
    <body>
      { loading ?
        <Loading></Loading> :
      (<>
        <header style={{position: 'sticky', top: '0', zIndex: '3'}}>
            <NavBar></NavBar>
          </header>
          <main>
            <div id="home">
              <Home></Home>
            </div>
            <div id="acerca">
              <About></About>
            </div>
            <div id="habilidades">
              <Skills></Skills>
            </div>        
            <div id="portafolio">
              <Portafolios></Portafolios>
            </div>
            <div id="contacto">
              <Contact></Contact>
            </div>
          </main>
          <div>
            <DownBar></DownBar>
          </div>
      </>)
      }
    </body>
  );
}

export default App;
