import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: '24th Alumni Meet 2026 | JAA',
};

export default function AlumniMeet2026() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
          <img 
            src="/events/alumni-meet-poster.jpg" 
            alt="24th JNU Alumni Meet Poster" 
            className="w-full h-full object-contain bg-gray-900"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4 drop-shadow-lg">
              24th JNU Alumni Meet & Dinner
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="space-y-8">
            <section className="border-b pb-8">
              <h2 className="text-3xl font-semibold mb-6 text-[#1B2D56]">Official Invitation</h2>
              <p className="text-lg leading-relaxed text-gray-700 italic">
                "Dear Alumni, The JNU Alumni Association (Regd.) 2002 officially invites you to the 24th JNU Alumni Meet and Dinner. Join us to reconnect with your network, celebrate our shared legacy, and drive the future of our alma mater."
              </p>
            </section>

            <section className="grid md:grid-cols-2 gap-12 border-b pb-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="mr-2 text-indigo-600">📍</span> Event Details
                </h3>
                <ul className="space-y-4 text-gray-700 text-lg">
                  <li><strong>Date:</strong> Saturday, 18 April 2026</li>
                  <li><strong>Time:</strong> 6:30 PM onwards</li>
                  <li><strong>Venue:</strong> Convention Centre, JNU Campus, New Delhi</li>
                </ul>
              </div>
              <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-indigo-900">
                  <span className="mr-2">🎫</span> Entry Fees
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between border-b border-indigo-200 pb-2">
                    <span>Individual Entry:</span>
                    <span className="font-bold">₹2000</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span>Family Entry:</span>
                    <span className="font-bold">₹3500</span>
                  </div>
                  <p className="text-sm text-indigo-600 mt-4 font-medium italic">
                    * Spouse & Children only. Outside guests are not permitted.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-8">
              <h2 className="text-3xl font-semibold mb-8 text-[#1B2D56]">Registration & Payment</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-lg mb-4 text-indigo-700">Step 1: Transfer Entry Fee</h4>
                    <div className="space-y-2 text-gray-700 font-mono text-sm">
                      <p><strong>Name:</strong> JNU Alumni Association</p>
                      <p><strong>A/C No:</strong> 00940100006687</p>
                      <p><strong>IFSC:</strong> BARB0CHANAK</p>
                      <p><strong>Bank:</strong> Bank of Baroda</p>
                      <p><strong>Branch:</strong> Chanakyapuri, New Delhi</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-lg text-indigo-700">Step 2: Complete Registration</h4>
                    <Link 
                      href="https://forms.gle/CUAwz6Ykztr7zBKDA" 
                      target="_blank"
                      className="block w-full text-center bg-[#1B2D56] text-white py-4 rounded-lg font-bold text-xl hover:bg-indigo-900 transition-colors shadow-lg"
                    >
                      Fill Registration Form
                    </Link>
                    <p className="text-red-600 font-bold text-center">
                      Deadline: 16 April 2026, 5:00 PM (Strict)
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <h4 className="font-bold text-lg mb-4 text-gray-600 text-center uppercase tracking-wider">Scan to Pay</h4>
                  <div className="p-4 bg-white border-2 border-dashed border-gray-300 rounded-2xl">
                    <img 
                      src="/events/payment-qr.jpg" 
                      alt="Payment QR Code" 
                      className="w-full max-w-[250px] h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-amber-50 p-8 rounded-2xl border border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 mb-4">🏠 Outstation Alumni</h3>
              <p className="text-amber-800 leading-relaxed">
                If you require accommodation in Delhi-NCR (on a personal payment basis), please indicate this early in the registration form so we can assist with arrangements.
              </p>
            </section>

            <footer className="text-center pt-12 border-t text-gray-500">
              <p className="font-semibold text-gray-800 mb-2">Regards,</p>
              <p className="text-xl font-bold text-[#1B2D56] mb-4">Organising Committee</p>
              <div className="space-y-1 text-sm">
                <p>JNU Alumni Association (Regd.)</p>
                <p>Phone: +91-98997-22626</p>
                <p>Email: associationjnualumni2002@gmail.com</p>
                <p>Website: www.jnualumniassociation.com</p>
              </div>
            </footer>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
