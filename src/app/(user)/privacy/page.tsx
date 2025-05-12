// pages/privacy-policy.js

import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className=" px-6  bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy for Chaneltwenty</h1>
      <p className="mb-4">
        At channeltwenty, accessible from{" "}
        <Link
          href="https://www.channeltwenty.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://www.channeltwenty.com
        </Link>
        , one of our main priorities is the privacy of our visitors. This
        Privacy Policy document contains types of information that is collected
        and recorded by channeltwenty and how we use it.
      </p>

      <section className="mb-8">
      <h2 className="text-2xl font-semibold mt-6 mb-2">Log Files</h2>
      <p className="mb-4">
        channeltwenty follows a standard procedure of using log files. These
        files log visitors when they visit websites. All hosting companies do
        this and a part of hosting services analytics. The information
        collected by log</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Cookes and Web Beacons</h2>
        <p>Your information is used to provide and improve our services, communicate with you, and comply with legal requirements.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Google Double Clik Darft Cookie</h2>
        <p>We do not sell your data. We may share your information with service providers or legal authorities when necessary.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Our Advertisin Partners</h2>
        <p>We use cookies to personalize content and analyze site traffic. You can manage cookie settings in your browser.</p>
        <p>. Google</p>
        <p><Link href='https//polices.google.com/tecnologies/ads'>https//polices.google.com/tecnologies/ads</Link></p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Privacy Policies</h2>
        <p>We may link to external websites. We are not responsible for their privacy practices. Please review their policies.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Thart Party Privacy Policies</h2>
        <p>We use industry-standard security practices, but no system is 100% secure.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Chidrens information</h2>
        <p>You may have the right to access, update, or delete your personal information depending on your jurisdiction.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Online Privacy Policy Only</h2>
        <p>We may update this policy. The latest version will always be available on this page.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Consent</h2>
        <p>If you have any questions, contact us at:</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
