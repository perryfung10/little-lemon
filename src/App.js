import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';


function App() {


  

  const handleScrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
}

  return (
    
    <div className='App'>
      <Header />
      <Main handleScrollToTop={handleScrollToTop}/>
      <Footer handleScrollToTop={handleScrollToTop}/>
      
    </div>
  );
}

export default App;
