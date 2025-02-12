import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Contact Form */}
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We're here to support your marathon journey. How can we help you today?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <form className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='name' placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input type="tel" name='name' placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <select className="select select-bordered w-full ">
                  <option>Race Registration</option>
                  <option>Sponsorship</option>
                  <option>Volunteer</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea className=" textarea w-full textarea-bordered" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn bg-[#fcf403] hover:bg-[#ffcd44]">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600">📅 Business Hours: Mon-Fri 9 AM - 6 PM</p>
              <p className="text-gray-600">📞 Phone: +1 (555) 123-4567</p>
              <p className="text-gray-600">📧 Email: contact@marathonmanagement.com</p>
              <p className="text-gray-600">📍 Address: 123 Marathon Street, NY 10001</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Emergency Contact</h2>
              <p className="text-gray-600">🚨 Race Day Emergency: +1 (555) 911-0000</p>
              <p className="text-gray-600">🏥 Medical Support: +1 (555) 911-1111</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-gray-400 hover:text-custom">
                  <IoLogoFacebook />
                </a>
                <a href="https://x.com/" className="text-gray-400 hover:text-custom">
                  <BsTwitterX />
                </a>
                <a href="https://instagram.com/" className="text-gray-400 hover:text-custom">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[400px] relative">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3020266170715!2d90.4158087258105!3d23.821587075655433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65085c29469%3A0x1ea14b24017d7630!2z4KaV4KeB4Kec4Ka_4KayIOCmq-CnjeCmsuCmvuCmh-Cmk-CmreCmvuCmsCwg4Kai4Ka-4KaV4Ka-!5e1!3m2!1sbn!2sbd!4v1739274746557!5m2!1sbn!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
