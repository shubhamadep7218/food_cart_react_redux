import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cards from './components/Cards';
import CardsDetails from './components/CardsDetails';

function App() {
  return (
    <div >
      
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path='/' element={<Cards />}/>
          <Route path='/cart/:id' element={<CardsDetails/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
