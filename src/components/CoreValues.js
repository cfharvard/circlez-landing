
import { FaHandshake, FaCheck, FaRocket, FaUsers } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Typography } from "@mui/material";


import React, { useState } from 'react';

const CoreValues = () => {

    const defaultSentence = "Hover over an icon above to understand the values we find important."
    const [sentence, setSentence] = useState(defaultSentence);

    return (
        <div>
            <div className="bg-black">
                <div>
                    <div className="md: b bt p-40 pt-10 pb-10">
                        <div className="flex-col items-center mb-4">
                            <h1 className="text-5xl md:text-6xl text-center md:py-4 lg:col-span-4 lg:inter font-bold text-white" >Core Values</h1> 
                        </div>
                        <div className="flex grid-cols-4 justify-between md:mt-10">
                            <div className="flex flex-col items-center"
                                onMouseEnter={() => setSentence('Stay on top of your goals with positive peer support.')}
                                onMouseLeave={() => setSentence(defaultSentence)}>
                                <div className="flex justify-center items-center rounded-full h-36 w-36 border-4 border-solid border-indigo-400 mb-2">
                                    <FaCheck className="text-white" fontSize="4rem"/>
                                </div> 
                                <h2 className="text-5l md:text-6l text-center font-bold text-white">Accountability</h2>
                            </div>
                            <div className="flex flex-col items-center"
                                onMouseEnter={() => setSentence('Challenge your friends to achieve their fullest potential.')}
                                onMouseLeave={() => setSentence(defaultSentence)}>
                                <div className="flex justify-center items-center rounded-full h-36 w-36 border-4 border-solid border-indigo-400 mb-2">
                                    <FaRocket className="text-white" fontSize="4rem"/>
                                </div> 
                                <h2 className="text-5l md:text-6l text-center font-bold text-white">Motivation</h2>
                            </div>
                            <div className="flex flex-col items-center"
                                onMouseEnter={() => setSentence("Share and track progress to gain insights from your circle's members")}
                                onMouseLeave={() => setSentence(defaultSentence)}>
                                <div className="flex justify-center items-center rounded-full h-36 w-36 border-4 border-solid border-indigo-400 mb-2">
                                    <FaHandshake className="text-white" fontSize="4rem"/>
                                </div> 
                                <h2 className="text-5l md:text-6l text-center font-bold text-white">Collaboration</h2>
                            </div>
                            <div className="flex flex-col items-center"
                                onMouseEnter={() => setSentence('Build lifelong connections with your friends through shared successes.')}
                                onMouseLeave={() => setSentence(defaultSentence)}>
                                <div className="flex justify-center items-center rounded-full h-36 w-36 border-4 border-solid border-indigo-400 mb-2">
                                    <FaUsers className="text-white" fontSize="4rem"/>
                                </div> 
                                <h2 className="text-5l md:text-6l text-center font-bold text-white">Community</h2>
                            </div>
                        </div>
                        <h1 className="text-white text-center pt-10 md: text-lg font-bold">{sentence}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreValues;