import './App.css';
import { Routes,Route, useLocation } from 'react-router-dom';
import { Cv, Home, MisDatos, Nav, Proyectos } from './component';

function App() {

  const location = useLocation();
  
  return (
    <div className="App">

    {location.pathname === "/" ? null : <Nav />}

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cv' element={<Cv />} />
      <Route path='/proyectos' element={<Proyectos />} />
      <Route path='/info' element={<MisDatos />} />
    </Routes>
      
      
    </div>
  );
}

export default App;
