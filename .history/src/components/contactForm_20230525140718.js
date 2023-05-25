import React, { useState } from 'react'

const contactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [market, setMarket] = useState(true);
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !email || !comment){
            alert(pl)
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default contactForm
