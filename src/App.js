
import {Route, Routes} from 'react-router';
import Home from "./components/Home/Home";
import Contacto from './components/Contacto/Contacto';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
      </Routes>

   
    </div>
  );
}

export default App;
