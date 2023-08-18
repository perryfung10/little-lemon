import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';


function App() {


  const handleScrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
}

  return (
    
    <div className='App'>
      <Header />
      <Main />
      <Footer handleScrollToTop={handleScrollToTop}/>
      
    </div>
  );
}

export default App;
