import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Reusable/Navbar'
import { useNavigate } from 'react-router-dom'

import img1 from '../../Images/electrician.jpg'
import img2 from '../../Images/painting.jpg'
import img3 from '../../images/plumbing.jpg'
import { useSelector } from 'react-redux'


const images = [img1, img2, img3];

const Home = () => {
  const { user } = useSelector(store => store.user);
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);


  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const handleProviderRequest = () => {
    navigate(Object.keys(user).length==0 ? '/register_user' : '/provider_request')
  };

  return (
    <>
      <Navbar />
      <main
        className="pt-20 min-h-[calc(100vh-72px)] flex flex-col items-center justify-center px-0 py-10 bg-[var(--primary-light)]"
        style={{
          background: 'linear-gradient(135deg, var(--primary-light) 60%, var(--secondary-light) 100%)',
        }}
      >

        <section className="w-full flex flex-col items-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--primary-dark)] mb-2 drop-shadow-lg text-center">
            Welcome to <span className="text-[var(--accent)]">SnapHelp</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-light)] mb-6 drop-shadow-lg text-center max-w-2xl">
            Your one-stop solution for finding trusted local services, fast and easy.
          </p>
          <div className="relative rounded-2xl w-full max-w-7xl aspect-[16/7] overflow-hidden mx-auto px-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=''
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${current === index ? 'opacity-90 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
                style={{ transitionProperty: 'opacity, transform' }}
                draggable={false}
              />
            ))}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full border-2 ${current === index ? 'bg-[var(--accent)] border-[var(--accent)] scale-110 shadow-lg' : 'bg-white/70 border-[var(--primary)]'} transition-all duration-300`}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>


        <section className="max-w-2xl w-full text-center space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <a
              href="/services"
              className="px-8 py-3 rounded-full bg-[var(--primary)] text-white font-semibold text-lg shadow hover:bg-[var(--primary-hover)] transition"
            >
              Explore Services
            </a>
            <a
              href="/account"
              className="px-8 py-3 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] font-semibold text-lg bg-white shadow hover:bg-[var(--primary-light)] transition"
            >
              My Account
            </a>
          </div>
        </section>
        <section className="w-full max-w-4xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2" role="img" aria-label="search">🔍</span>
            <h2 className="text-xl font-semibold text-[var(--primary-dark)] mb-1">Find Services</h2>
            <p className="text-[var(--text-light)] text-center">Browse and discover a variety of local services tailored to your needs.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2" role="img" aria-label="book">📅</span>
            <h2 className="text-xl font-semibold text-[var(--primary-dark)] mb-1">Book Instantly</h2>
            <p className="text-[var(--text-light)] text-center">Book your preferred service provider at your convenience, anytime.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2" role="img" aria-label="star">⭐</span>
            <h2 className="text-xl font-semibold text-[var(--primary-dark)] mb-1">Rate & Review</h2>
            <p className="text-[var(--text-light)] text-center">Share your experience and help others choose the best services.</p>
          </div>
        </section>

        <section className="w-full max-w-2xl mx-auto mt-16 mb-10 bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center space-y-4 border border-[var(--primary-light)]">
          <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-2">Become a Service Provider</h3>
          <p className="text-[var(--text-light)] text-center mb-2">
            If you want to join as a provider, click the button below and submit the form. Our admin will verify your details and approve your request if you are eligible.
          </p>
          <button
            onClick={handleProviderRequest}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold text-lg shadow hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            Become a Provider
          </button>
        </section>
      </main>
      <footer
        className="w-full mt-auto py-6 px-4 text-center"
        style={{
          background: 'linear-gradient(90deg, var(--primary-dark), var(--primary))',
          color: 'var(--primary-light)',
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-lg font-semibold tracking-wide">
            &copy; {new Date().getFullYear()} SnapHelp. All rights reserved.
          </div>
          <div className="flex gap-6 text-[var(--primary-light)] text-base">
            <a href="/privacy" className="hover:text-[var(--accent)] transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-[var(--accent)] transition">Terms of Service</a>
            <a href="/contact" className="hover:text-[var(--accent)] transition">Contact</a>
          </div>
        </div>
      </footer>
    </>
  )
};
export default Home