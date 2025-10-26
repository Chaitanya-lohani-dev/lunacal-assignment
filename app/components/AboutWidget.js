"use client";
import { useState } from 'react';

export default function AboutWidget() {
  const [activeTab, setActiveTab] = useState("About Me");
  const tabs = ["About Me", "Experiences", "Recommended"];
  
  const content = {
    "About Me": `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`,
    "Experiences": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Recommended": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  };

  return (
    <div 
      className="relative bg-[#363C43] w-full max-w-[720px] rounded-[18.89px] p-6 transition-all duration-300"
      style={{
        boxShadow: '5.67px 5.67px 3.78px rgba(0, 0, 0, 0.4)',
        minHeight: '316px'
      }}
    >
      {/* Header with ? icon and tabs */}
      <div className="flex justify-between items-center gap-3 mb-8">
        {/* Question mark icon */}
        <div 
          className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold border-2 border-[#A3ADBA] text-[#A3ADBA]"
        >
          ?
        </div>

        {/* Tabs container */}
        <div 
          className="flex items-center gap-1.5 rounded-[23px] p-1.5 bg-[#171717] flex-1"
          style={{
            boxShadow: 'inset 0px 4.96px 12.4px 2.48px rgba(0, 0, 0, 0.25)'
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative flex-1 h-[49px] rounded-2xl transition-all duration-300 ease-in-out overflow-hidden ${
                activeTab !== tab ? 'shimmer-button' : ''
              }`}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: '16px',
                ...(activeTab === tab 
                  ? {
                      background: '#28292F',
                      color: '#FFFFFF',
                      boxShadow: '-8.43px -16.87px 50.6px -16.87px #485B71, 13.49px 16.87px 67.47px 8.43px #0A0A0A'
                    }
                  : {
                      background: 'transparent',
                      color: '#A3ADB2'
                    }
                )
              }}
            >
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Empty space for alignment */}
        <div className="w-6 shrink-0"></div>
      </div>

      {/* Content area with custom scrollbar and fade-in animation */}
      <div className="relative">
        <div className="h-[175px] overflow-y-auto pr-2 custom-scrollbar">
          <p 
            key={activeTab}
            className="text-[#969696] animate-fadeIn"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '25px'
            }}
          >
            {content[activeTab]}
          </p>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #171717;
          border-radius: 10px;
          margin: 4px 0;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #888989 0%, #4A4E54 100%);
          border-radius: 10px;
          transition: background 0.3s ease;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #999999 0%, #5A5E64 100%);
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }

        /* Shimmer sweep effect - covers entire tab background */
        .shimmer-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          z-index: 1;
          transition: width 0s;
        }

        .shimmer-button:hover::before {
          animation: sweepFill 0.5s ease-in-out forwards;
        }

        @keyframes sweepFill {
          0% {
            width: 0%;
            left: 0;
          }
          100% {
            width: 100%;
            left: 0;
          }
        }

        /* Keep the filled state after animation */
        .shimmer-button:hover {
          background: rgba(255, 255, 255, 0.1) !important;
        }
      `}</style>
    </div>
  );
}