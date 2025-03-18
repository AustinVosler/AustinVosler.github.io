"use client";

import { useState } from "react";
import React from "react";


interface SpinningWheelProps {
    segments: string[];
  }

export default function SpinningWheel({ segments }: SpinningWheelProps) 
{
    const [angle, setAngle] = useState<number>(0);
    const [spinning, setSpinning] = useState<boolean>(false);
    const segmentAngle = 360 / segments.length;

    const spinWheel = () =>
    {
        if (spinning)
            return;

        setSpinning(true);
        
        const randomSpins = Math.floor(Math.random() * 10) + 5;
        const randomOffset = Math.random() * 360;
        const finalAngle = -1 * ((-1 * angle) + randomSpins * 360 + randomOffset);
    
        setAngle(finalAngle);

        setTimeout(() =>
        {
            setSpinning(false);
            const normalizedAngle = -1 * finalAngle % 360;
            const index = Math.floor(normalizedAngle / segmentAngle) % segments.length;
      
            alert(`You landed on: ${segments[index]} finalAngle: ${normalizedAngle}`);
        }, 3000);
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="relative w-[512px] h-[512px]">
        <div
          className="absolute inset-0 rounded-full border-4 border-gray-300 transition-transform duration-[3000ms] ease-out"
          style={{ transform: `rotate(${angle}deg)` }}
        >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {segments.map((segment, i) => {
            const startX = 50 + 50 * Math.cos((segmentAngle * i) * (Math.PI / 180));
            const startY = 50 + 50 * Math.sin((segmentAngle * i) * (Math.PI / 180));
            const endX = 50 + 50 * Math.cos((segmentAngle * (i + 1)) * (Math.PI / 180));
            const endY = 50 + 50 * Math.sin((segmentAngle * (i + 1)) * (Math.PI / 180));

            const labelX = 50 + 35 * Math.cos((segmentAngle * (i + 0.5)) * (Math.PI / 180));
            const labelY = 50 + 35 * Math.sin((segmentAngle * (i + 0.5)) * (Math.PI / 180));

            const textRotation = (segmentAngle * i) + (segmentAngle / 2);
            const textFlip = textRotation > 90 && textRotation < 270 ? 180 : 0;

            return (
              <g key={i}>
                <path
                  d={`M50,50 L${startX},${startY} A50,50 0 0,1 ${endX},${endY} Z`}
                  fill={i % 2 === 0 ? "#FF0000" : "#000000"}
                  stroke="white"
                  strokeWidth="1"
                />
                <text
                  x={labelX}
                  y={labelY}
                  fontSize="8"
                  textAnchor="middle"
                  transform={`rotate(${textFlip}, ${labelX}, ${labelY})`} 
                  fill="white"
                  fontWeight="bold"
                >
                  {segment}
                </text>
              </g>
            );
          })}
        </svg>
        </div>
        <div className="absolute right-1 top-1/2 -translate-y-1/2 translate-x-1/4 w-6 h-2 bg-yellow-500"></div>
      </div>
      <button
        onClick={spinWheel}
        className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition"
        disabled={spinning}
      >
        {spinning ? "Spinning..." : "Spin the Wheel!"}
      </button>
    </div>
  );
}