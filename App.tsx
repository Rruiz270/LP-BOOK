import ContactForm from './components/ContactForm';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Products from './components/Products';
import Process from './components/Process';
import About from './components/About';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Benefits />
      <Products />
      <Process />
      <About />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
