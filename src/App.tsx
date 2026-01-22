import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Orbs from './components/Orbs';
import Control from './components/Control';
import Pricing from './components/Pricing';
import Trust from './components/Trust';
import NotifyForm from './components/NotifyForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Orbs />
        <Control />
        <Pricing />
        <Trust />
        <NotifyForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
