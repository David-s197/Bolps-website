import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Swal from 'sweetalert2'

const ContactUs = () => {

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
      title: "Success!",
      text: "Message sent succesfully!",
      icon: "success"
});
    }
  };


  return (
    <div className='bg-orange-50'>
      <Header/>
      <div className='serv-title  bg-orange-50'>
        <h1 className=''>Get In Touch</h1>
        <hr />
          </div>
          <div className='contact'>
          <form onSubmit={onSubmit}>
            <h2>Contact Form</h2>
            <div className='input-box'>
            <label htmlFor="FullName">Full Name</label>
            <input type="text" className='field' placeholder='Enter your name' name='name' required />
            </div>
            <div className='input-box'>
            <label htmlFor="Email">Email Address</label>
            <input type="email" className='field' placeholder='Enter your email' name='email' required />
            </div>
            <div className='input-box'>
            <label htmlFor="Mesaage">Message</label>
            <textarea name='message'className ='field mess' placeholder='Enter your message'required></textarea>
            </div>
            <button type='Submit'>Submit</button>
          </form>
          </div>
      <Footer/>
    </div>
  )
}

export default ContactUs