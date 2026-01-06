import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Tech from './components/Tech'
import DesignCarousel from './components/DesignCarousel'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />

        <section className="magic-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="magic-text"
            >
              <h2>Sunday</h2>
              <h2 className="indent-1">마법이 되는</h2>
              <h2 className="indent-2">순간.</h2>
            </motion.div>
          </div>
        </section>

        <Skills />

        <section className="design-section">
          <div className="container-full">
            <h2 className="section-title">실생활을 위한 설계.</h2>
            <DesignCarousel />
          </div>
        </section>

        <div className="section-divider blue" />
        <Tech />

        <section className="cta-section">
          <div className="container">
            <div className="cta-card">
              <h2>경험하지 못한 미래를 먼저 만나보세요.</h2>
              <p>현재 베타 테스터 신청이 진행 중입니다.</p>
              <button className="btn btn-primary">대기 명단 합류하기</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Sunday Robotics. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">개인정보 처리방침</a>
            <a href="#">이용약관</a>
            <a href="#">문의하기</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
