import React, { useState } from 'react';

const contactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [market, setMarket] = useState(true);
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !email || !comment){
            alert('Please fill in all required fields');
            return;
        }

        setSubmit(true);
    };

    const handleMarket = (e) => {
        setMarket(e.target.checked);
    };

    // reset form fields
    const closeModal = () => {
        setSubmit(false);
        setName('');
        setEmail('');
        setComment('');
        setMarket(true);
    };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form
        className='w-full max-w-md bg-white rounded-lg p-8'
        onSubmit={handleSubmit}
      >
        <h2 className='text-2x1 font-bold mb-4'>Contact Us</h2>
        <div className='mb-4'>
            <
        </div>
      </form>
    </div>
  )
}

export default contactForm
