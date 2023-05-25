import './App.css';
import ContactForm from './components/ContactForm'

const App = () => {
  return (
    <div className='relative z-0 bg-blue-900'>
      <h1 className='"text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",'> 
        Customer Contact Form</h1>
      <ContactForm />
    </div>
  );
}

export default App;
