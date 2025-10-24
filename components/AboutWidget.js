"use client";

import { useState } from "react";
import { User, Briefcase, Star } from "lucide-react"; 

export default function AboutWidget() {
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <div className="bg-gray-800  backdrop-blur-md rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-700 rounded-full text-sm font-bold text-white">
          ?
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("About Me")}
            className={`px-4 py-1 rounded-full ${
              activeTab === "About Me" ? "bg-white text-black" : "bg-gray-700"
            }`}
          >
            About Me
          </button>
          <button
            onClick={() => setActiveTab("Experiences")}
            className={`px-4 py-1 rounded-full ${
              activeTab === "Experiences"
                ? "bg-white text-black"
                : "bg-gray-700"
            }`}
          >
            Experiences
          </button>
          <button
            onClick={() => setActiveTab("Recommended")}
            className={`px-4 py-1 rounded-full ${
              activeTab === "Recommended"
                ? "bg-white text-black"
                : "bg-gray-700"
            }`}
          >
            Recommended
          </button>
        </div>
      </div>

      <div className="text-gray-300">
        {activeTab === "About Me" && (
          <p>
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now. I was born and
            raised in Albany, NY... (baaki text yahan daalein)
          </p>
        )}
        {activeTab === "Experiences" && (
          <p>(Yahan par "Experiences" tab ka content aayega)</p>
        )}
        {activeTab === "Recommended" && (
          <p>(Yahan par "Recommended" tab ka content aayega)</p>
        )}
      </div>
    </div>
  );
}
