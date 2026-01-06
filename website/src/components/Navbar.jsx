import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="navbar"
    >
      <div className="container nav-content">
        <div className="logo">
          <span className="logo-text">sunday</span>
          <span className="logo-icon">😊</span>
        </div>
        <div className="nav-links">
          <a href="#memo">메모(Memo)</a>
          <a href="#skills">기능</a>
          <a href="#tech">기술</a>
          <button className="btn btn-primary btn-sm">베타 신청</button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
