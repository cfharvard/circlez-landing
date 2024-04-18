import React from 'react';
import ContactForm from './ContactForm';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="text-white  bg-black">
        <div className="md:grid md:grid-cols-2">
            <div className="flex flex-col items-center justify-center md:ml-20 pt-20 md:flex-none md:items-start">
                <h1 className="text-5xl md:text-6xl mb-6 font-bold text-white text-center md:text-left md:inter">Contact Us</h1>
                <p className="text-md text-center md:text-left md:inter text-zinc-500 md:mr-36 md:ml-0">
                    We are always looking for new opportunities to partner with organizations and individuals who share our vision. 
                    If you are interested in working with us, please reach out! </p>
                <div className="pt-4 m-0 w-fit">
                    <IconButton href="https://instagram.com/circlez_official?igshid=MzRlODBiNWFlZA==" target="_blank" style={{paddingLeft: 0}}><InstagramIcon style={{ color: "#FFF",  fontSize: "50px" }}/></IconButton>
                    <IconButton href="https://www.linkedin.com/company/circlez-llc/" target="_blank" style={{ paddingRight: 0 }}><LinkedInIcon style={{ color: "#FFF", fontSize: "50px" }}/></IconButton>

                    {/* <Link to="/Privacy">Privacy Policy</Link> */}
                </div>
            </div> 
            <ContactForm />
        </div>
      </div>                 

  );
};

export default Contact;
