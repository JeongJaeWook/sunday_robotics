import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import hardwareImg from '../assets/hardware.png';
import softwareImg from '../assets/software.png';
import communityImg from '../assets/community.png';

const designItems = [
    { img: hardwareImg, title: '하드웨어' },
    { img: softwareImg, title: '소프트웨어' },
    { img: communityImg, title: '커뮤니티' },
    { img: hardwareImg, title: '디자인' },
    { img: softwareImg, title: '인텔리전스' },
];

const DesignCarousel = () => {
    return (
        <div className="carousel-container">
            <motion.div
                className="carousel-track"
                animate={{ x: [0, -1320] }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear"
                }}
            >
                {designItems.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <div className="carousel-img-wrapper">
                            <img src={item.img} alt={item.title} className="carousel-img" />
                        </div>
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default DesignCarousel;
