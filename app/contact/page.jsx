import React from "react";

function ContactPage() {
  return (
    <section className="mt-20 mb-16 m-auto p-4 flex flex-col">
      <h2 className="text-2xl font-bold self-center">Contact</h2>
      <p className="my-4">
        There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration.
      </p>
      <h3 className="text-lg font-bold">Address</h3>
      <p className="my-4">935-1670 Neque. St. Centennial Delaware 48432</p>
      <h3 className="text-lg font-bold">Phone Number/WhatsApp</h3>
      <p className="my-4">(+1) 2266 5556 999</p>
      <h3 className="text-lg font-bold">Email</h3>
      <p className="my-4">demomail@example.com</p>
      <h3 className="text-lg font-bold">Map</h3>
      <div className="my-2">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.7931071513685!2d74.34998708204007!3d31.52984188136652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905443b0ffc4d%3A0x40ce0b422224183!2sColoc%20work!5e0!3m2!1sen!2s!4v1677397570691!5m2!1sen!2s"
          //   width="400"
          //   height="300"
          //   style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default ContactPage;
