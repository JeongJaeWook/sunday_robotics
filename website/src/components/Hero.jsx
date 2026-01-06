import React from 'react';
import { motion } from 'framer-motion';
import memoImg from '../assets/memo.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                >
                    <h1 className="hero-title">
                        Say Hello  <br />
                        <span className="text-outline">'Memo'</span>
                    </h1>
                    <p className="hero-description">
                        가장 진화된 가정용 로봇 '메모'를 만나보세요.
                        단조로운 일상이 마법이 되는 순간, 2026년에 시작됩니다.
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary">베타 테스터 신청</button>
                        <button className="btn btn-outline">작동 영상 보기</button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hero-image-wrapper"
                >
                    <img src={memoImg} alt="Memo Robot" className="hero-image" />
                    <div className="floating-badge">Launching late 2026</div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
