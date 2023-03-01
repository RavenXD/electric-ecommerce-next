import React from "react";
import Footer from "../(Components)/Footer";

function ContactPage() {
  return (
    <>
      <section className='mt-4 mb-16 m-auto p-4 flex flex-col'>
        <h2 className='text-2xl font-bold self-center'>Contact</h2>
        <p className='my-4'>
        Welcome to our Contact Page! Here you can find all the information you need to get in touch with us. <br />
        </p>
        <h3 className='text-lg font-bold'>Address</h3>
        <p className='my-4'>
          گرلڈ مائین سنٹر، 105 Ferozepur Rd, Ichhra Lahore, Punjab 54000
        </p>
        <h3 className='text-lg font-bold'>Call Now</h3>
        <a className='mt-4 mb-1' href="tel:+92 301 4649956">Phone: +92 301 4649956</a>
        <a className='mt-1 mb-4' href="http://wa.me/+923014649956">WhatsApp: +92 301 4649956</a>
        <h3 className='text-lg font-bold'>Email</h3>
        <p className='my-4'>raoahsenriaz@gmail.com</p>
        <h3 className='text-lg font-bold'>Map</h3>
        <div className='my-2'>
          <iframe
            className='w-full'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.7931071513685!2d74.34998708204007!3d31.52984188136652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905443b0ffc4d%3A0x40ce0b422224183!2sColoc%20work!5e0!3m2!1sen!2s!4v1677397570691!5m2!1sen!2s'
            width='90%'
            height='300'
            //   style="border:0;"
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactPage;
