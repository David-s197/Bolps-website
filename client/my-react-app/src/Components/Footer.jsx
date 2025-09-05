import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className=' px-4 md:px-16 lg:px-28'> 
    <div className=''>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h2 className='text-lg'>
            Our Adresses
          </h2>
          <ul>
          <li>
          <span>
            16, Mabinuori Dawodu Street, Gbagada Estate Phase 1, Lagos, Nigeria
            </span>
            </li>
            <li className='border-t'>
              Email: info@bolpsystem.com
            </li>
            </ul>
        </div>
        <div>
          <h2 className='text-lg'>Quick Links</h2>
          <ul>
            <li><Link to="/"><a href='' className=' hover:underline'>Home</a></Link></li>
            <li><Link to="/Services"><a href='' className=' hover:underline'>Services</a></Link></li>
            <li><Link to="/ContactUs"><a href='' className=' hover:underline'>Contact Us</a></Link></li>
          </ul>
        </div>
        <div>
          <h2 className='text-lg'>Follow Us</h2>
          <ul className='flex space-x-5'>
            <li>
               <FaFacebook className='text-black'/> 
            <a href='' className=' iconNames hover:underline'> 
              Facebook
              </a>
            </li>
            <li> 
              <FaTwitter className='text-black'/> 
              <a href='' className=' iconNames hover:underline'>
                 Twitter
                 </a>
              </li>
            <li> <FaInstagram/>
             <a href='' className='iconNames hover:underline'>
               Instagram
               </a>
             </li>
          </ul>
        </div>
        </div>
        </div>
        <div className='copyrightbar'>
          <p>Copyright © {new Date().getFullYear()}.All rights Reserved</p>
        </div>
      </footer>
  )
};

export default Footer