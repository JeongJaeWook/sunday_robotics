import React from 'react';
import { motion } from 'framer-motion';
import gloveImg from '../assets/glove.png';

const Tech = () => {
    return (
        <section id="tech" className="tech-section">
            <div className="container tech-grid">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="tech-image-wrapper"
                >
                    <img src={gloveImg} alt="Skill Capture Glove" className="tech-image" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="tech-text"
                >
                    <span className="badge">MemDev 프로그램</span>
                    <h2 className="section-title text-left">메모는 어떻게 학습할까요?</h2>
                    <p className="tech-description">
                        자체 개발한 '스킬 캡처 글로브(Skill Capture Glove)'를 통해 전문가의 미세한 움직임을 기록합니다.
                        이 동작들은 고도의 로보틱 지능으로 변환됩니다.
                    </p>
                    <button className="btn btn-outline">기술 살펴보기</button>
                </motion.div>
            </div>
        </section>
    );
};

export default Tech;
