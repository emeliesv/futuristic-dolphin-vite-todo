import Landingpage from './Pages/Landingpage';
import About from './Pages/About';
import Todopage from './Pages/Todopage';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Todos" element={<Todopage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
