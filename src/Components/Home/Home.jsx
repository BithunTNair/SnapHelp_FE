import React from 'react'
import Navbar from '../Reusable/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <main
        className="min-h-[calc(100vh-72px)] flex flex-col items-center justify-center px-4 py-10 bg-[var(--primary-light)]"
        style={{
          background: 'linear-gradient(135deg, var(--primary-light) 60%, var(--secondary-light) 100%)',
        }}
      >
        <section className="max-w-2xl w-full text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-dark)] mb-2">
            Welcome to <span className="text-[var(--accent)]">SnapHelp</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-light)] mb-4">
            Your one-stop solution for finding trusted local services, fast and easy.
          </p>
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