import './../../styles/contact.css';

import React from 'react'

const Contact = () => {

    //web3Forms
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    //enter key
    formData.append("access_key", "0cbfb9cc-a4cd-4586-a7fb-d34271cd6434");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
}


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src="/mail.svg" alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact
                information below. Your feedback, questions, and suggestions are 
                important to us as we strive to provide exceptional service to our 
                university community.
            </p>

            <ul>
                <li><img src="/mail.png" alt="" />university@city.dev</li>
                <li><img src="/phone.webp" alt="" />+1 123-456-7890</li>
                <li><img src="/location.png" alt="" />77 Massachusetts Ave, Cambridge<br/> MA 02139, United 
                States</li>
            </ul>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>

                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>

                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>

                <button type='submit' className='btn dark-btn'>Submit now <img src="/next1.svg" alt="" /></button>

            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact