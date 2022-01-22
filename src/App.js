import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
