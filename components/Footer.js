import React from "react";

function Footer() {
  return (
    <div className="md:flex justify-around  shadow-md p-5  items-center bg-gray-100 text-gray-900">
      <div className="space-y-4 text-sm text-gray-800 mb-5">
        <h5 className="font-bold uppercase">About</h5>
        <p>How Airbnb works</p>
        <p>Investor</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800 mb-5">
        <h5 className="font-bold uppercase">Community</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Its pretty awesome clone</p>
        <p>Built using Nextjs TailwindCss</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800 mb-5">
        <h5 className="font-bold uppercase">Host</h5>
        <p>Nagaraj Biradar</p>
        <p>Web Developer</p>
        <p>Frontend Developer</p>
        <p>Referrals accepted</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800 mb-5">
        <h5 className="font-bold uppercase">Contact</h5>
        <p>
          <a href="https://github.com/nagarajtolearn" target="_blank">
            Github
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/nagaraj-biradar-5b2009252"
            target="_blank"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <a href="https://nagaraj-portfolio.netlify.app" target="_blank">
            Portfolio
          </a>
        </p>
        <p>
          <a href="mailto: nagarajtolearn@gmail.com">Send Email</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
