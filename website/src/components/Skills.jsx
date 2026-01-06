import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Shirt, Trash2, LayoutGrid } from 'lucide-react';

const skills = [
    { icon: <Coffee />, title: '에스프레소', desc: '매일 아침 완벽하게 추출되는 커피 한 잔.' },
    { icon: <Shirt />, title: '세탁물 정리', desc: '로봇의 정교함으로 옷감을 분류하고 접습니다.' },
    { icon: <Trash2 />, title: '청소', desc: '잠든 사이 공간을 깨끗하게 유지합니다.' },
    { icon: <LayoutGrid />, title: '그리고 더 많은 것들', desc: '계속해서 늘어나는 무한한 기술 라이브러리.' },
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">무한한 가능성.</h2>
                <p className="section-subtitle">메모는 단순히 일하는 것을 넘어 스스로 학습합니다. 전문가들이 가르치는 새로운 기술이 매일 업데이트됩니다.</p>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="skill-card"
                        >
                            <div className="skill-icon">{skill.icon}</div>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
