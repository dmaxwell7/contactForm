import React, { useState } from 'react';

const ContactForm = () => {
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
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                Name
            </label>
            <input
              className='w-full px-3 py-2 border border-gray-300 rounded-md'
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                Email
            </label>
            <input
              className='w-full px-3 py-2 border border-gray-300 rounded-md'
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className='mb-4'>
            <label>
                Question/Comment
            </label>
            <textarea
                className='w-full px-3 py-2 border border-gray-300 rounded-md'
                id='comment'
                rows="4"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
        </div>
        <div className='mb-4'>
            <label className='flex items-center'>
                <input 
                    type='checkbox'
                    className='form-checkedbox'
                    checked={market}
                    onChange={handleMarket}
                />
                <span className='ml-2 text-gray-700 text-sm'>Recieve marketing and offer emails</span>
            </label>
        </div>
        <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            type='submit'
        >
            Submit
        </button>
      </form>

      {submit && (
        <div className='fixed inset-0 flex items-center justify-center'>
            <div className='absolute inset-0 bg0black opacity-50'></div>
            <div className='bg-white rounded-lg p-8'>
                <h2 className='text-2xl font0bold mb-4'>Thank You, {name}!</h2>
                <p>We appreciate your feedback.</p>
                <button>
                    
                </button>
            </div>
        </div>
      )}
    </div>
  )
}

export default ContactForm;