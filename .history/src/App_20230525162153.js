import './App.css';
import ContactForm from './components/ContactForm'
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='relative z-0 bg-blue-900'>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
