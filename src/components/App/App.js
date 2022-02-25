import './App.css';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Gallery from '../Gallery/Gallery';
import Info from '../Info/Info';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='page'>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Info />
      </main>
      <Footer />
    </div>
  );
}

export default App;
