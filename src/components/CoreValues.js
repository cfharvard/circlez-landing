import React, { useState } from 'react';
import { FaHandshake, FaCheck, FaRocket, FaUsers } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Typography } from "@mui/material";

const CoreValues = () => {
    const sentences = [
        'Stay on top of your goals with positive peer support.',
        'Challenge your friends to achieve their fullest potential.',
        "Share and track progress to gain insights from your circle's members.",
        'Build lifelong connections with your friends through shared successes.'
    ];
    const defaultSentence = "Hover over an icon above to understand the values we find important.";

    const [sentence, setSentence] = useState(defaultSentence);
    const [opacity, setOpacity] = useState(1);

    const handleMouseEnter = (i) => {
        setOpacity(0);
        setTimeout(() => {
            setSentence(sentences[i]);
            setOpacity(1);
        }, 500);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
        setTimeout(() => {
            setSentence(defaultSentence);
            setOpacity(1);
        }, 500);
    };

    return (
        <div className="bg-black min-h-screen text-white">
            <div className="p-5 md:p-10 lg:p-40 pt-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center py-4 font-bold" >Core Values</h1> 
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10">
                    {[FaCheck, FaRocket, FaHandshake, FaUsers].map((Icon, i) => (
                        <div key={i} className="flex flex-col items-center p-4"
                            onMouseEnter={() => handleMouseEnter(i)}
                            onMouseLeave={handleMouseLeave}>
                            <div className="flex justify-center items-center rounded-full h-24 w-24 md:h-36 md:w-36 border-4 border-solid border-indigo-400 mb-2">
                                <Icon className="text-white text-4xl md:text-6xl"/>
                            </div>
                            <h2 className="text-xl md:text-3xl text-center font-bold">{
                                ['Accountability', 'Motivation', 'Collaboration', 'Community'][i]
                            }</h2>
                        </div>
                    ))}
                </div>
                <Typography variant="h6" className="text-center pt-10" style={{ opacity: opacity, transition: 'opacity 0.5s' }}>
                    {sentence}
                </Typography>
            </div>
        </div>
    );
};

export default CoreValues;
