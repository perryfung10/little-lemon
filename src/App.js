import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Booking } from './components/Booking';
import { SuccessfulPage } from './components/SuccessfulPage';

function App() {
  return (
    
    <div className='App'>
      <Header />
      <Main>
        <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/menu' element={<Menu />} /> */}
            <Route path='/reservation' element={<Booking />} />
            {/* <Route path='/order-online' element={<OrderOnline />} />
            <Route path='/login' element={<Login />} /> */}
            <Route path='/successful' element={<SuccessfulPage />} />
          </Routes>
      </Main>
      <Footer />
      
    </div>
  );
}

export default App;
