import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Missions from './components/Missions';
//import Activities from './components/Activities';
import Actualites from './components/Actualites';
import Network from './components/Network';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Missions />
      
       <Actualites />
      <Network />
      <Footer />
    </div>
  );
}

export default App;
