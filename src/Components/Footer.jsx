import React from 'react';

const Footer = () => {
    return (
        <div className='bg-secondary text-white p-10 '>
            <footer className="footer border-b-2 border-b-gray-600">
                {/* Logo Section */}
                <aside className="flex flex-col items-center mb-6">
                    <img className="w-14 h-14" src="https://i.ibb.co/bPjkfDc/logo.gif" alt="RunFest Logo" />
                    <a className="text-3xl font-semibold font-bebas">RunFest</a>
                    <p className="text-center mt-2 text-sm">
                        Join us in celebrating the spirit of running and community. Be a part of the race to make a difference!
                    </p>
                </aside>

                {/* Footer Links */}
                <nav>
                    <h6 className="footer-title">Event Info</h6>
                    <a className="link link-hover">Race Schedule</a>
                    <a className="link link-hover">Route Map</a>
                    <a className="link link-hover">FAQs</a>
                    <a className="link link-hover">Results</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Volunteer</a>
                    <a className="link link-hover">Sponsorship</a>
                    <a className="link link-hover">Training Tips</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Code of Conduct</a>
                </nav>
            </footer>
            <div className=" pt-4 text-center">
                <p>&copy; {new Date().getFullYear()} RunFest. All Rights Reserved.</p>
                <p>
                    Follow us on{' '}
                    <a href="https://www.facebook.com" className="link link-hover text-blue-600">Facebook</a>,{' '}
                    <a href="https://www.twitter.com" className="link link-hover text-blue-400">Twitter</a>, and{' '}
                    <a href="https://www.instagram.com" className="link link-hover text-pink-500">Instagram</a>.
                </p>
            </div>
        </div>
    );
};

export default Footer;
