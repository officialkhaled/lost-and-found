"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CircularText({
    text = "CONTACT ME * IF FOUND * ",
    size = 200,
    radius = 90,
    duration = 40
}) {
    const repeatedText = text.repeat(6);

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <div className="absolute">
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="overflow-visible"
            >
                <defs>
                    <path
                        id="circlePath"
                        d={`M ${size / 2},${size / 2} 
                m -${radius},0 
                a ${radius},${radius} 0 1,1 ${radius * 2},0 
                a ${radius},${radius} 0 1,1 -${radius * 2},0`}
                    />
                </defs>
                <motion.text
                    fill="white"
                    fontSize="17"
                    fontWeight="600"
                    letterSpacing="3px"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration, ease: "linear" }}
                >
                    <textPath href="#circlePath" startOffset="0%">
                        {repeatedText}
                    </textPath>
                </motion.text>
            </svg>
        </div>
    );
}
