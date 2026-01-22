import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Orbs from './components/Orbs';
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
        <Pricing />
        <Trust />
        <NotifyForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
