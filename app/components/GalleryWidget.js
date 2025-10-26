"use client";
import { useState, useRef } from "react";
import { Plus, ArrowLeft, ArrowRight } from "lucide-react";

export default function GalleryWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400",
  ]);

  const fileInputRef = useRef(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(images.length - 1, prev + 1));
  };

  const handleAddImage = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages([...images, e.target.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="relative w-full max-w-[720px] rounded-[18.89px] p-6 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(150,190,231,0.25)] bg-[#363C43]"
      style={{
        boxShadow: "5.67px 5.67px 3.78px rgba(0, 0, 0, 0.4)",
        minHeight: "330px",
      }}
    >
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Header */}
      <div className="flex justify-between items-center mb-8 gap-4 flex-wrap">
        {/* ? Icon */}
        <div
          className="flex w-6 h-6 items-center justify-center rounded-full text-sm font-bold border-2 border-[#A3ADBA] text-[#A3ADBA]"
        >
          ?
        </div>

        {/* Gallery Label Button */}
        <button
          className="rounded-[20px] bg-[#171717] text-white flex items-center justify-center transition-all duration-500 hover:bg-[#202020] hover:scale-105 active:scale-95 shadow-inner-glow"
          style={{
            width: "149px",
            height: "62px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "30px",
          }}
        >
          Gallery
        </button>

        {/* Controls */}
        <div className="flex items-center gap-6 flex-wrap">
          {/* Add Image Button */}
          <button
            onClick={handleAddImage}
            className="flex items-center justify-center gap-2 text-white rounded-[104px] transition-all duration-500 hover:scale-110 hover:bg-white/8 active:scale-95 group"
            style={{
              width: "131.32px",
              height: "46px",
              background: "rgba(255, 255, 255, 0.03)",
              boxShadow:
                "-0.5px -0.5px 6.9px rgba(255, 255, 255, 0.25), 9px 10px 7.1px rgba(0, 0, 0, 0.4), inset 0px 0px 48.91px rgba(255, 255, 255, 0.05), inset 0px 3.26px 3.26px rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(52.28px)",
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontWeight: 800,
              fontSize: "12px",
              textTransform: "uppercase",
            }}
          >
            <Plus className="w-4 h-4 transition-transform duration-500 group-hover:rotate-90" />
            ADD IMAGE
          </button>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="nav-btn"
            >
              <ArrowLeft className="w-[18px] h-[18px] text-[#6F787C] transition-colors duration-300 group-hover:text-[#96BEE7]" />
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex >= images.length - 1}
              className="nav-btn"
            >
              <ArrowRight className="w-[18px] h-[18px] text-[#6F787C] transition-colors duration-300 group-hover:text-[#96BEE7]" />
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative">
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          {images.map((imageUrl, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-3xl overflow-hidden bg-gray-800 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:translate-y-1.5 hover:scale-[1.05] hover:shadow-[0_10px_25px_rgba(150,190,231,0.25)] cursor-pointer"
              style={{
                maxWidth: "190px",
                maxHeight: "179px",
              }}
            >
              <img
                src={imageUrl}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-110 group-hover:brightness-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .shadow-inner-glow {
          box-shadow: inset 0px 4px 10px 2px rgba(0, 0, 0, 0.25),
            0 0 20px rgba(255, 255, 255, 0.05);
        }

        .nav-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            139.14deg,
            #303439 12.4%,
            #161718 94.96%
          );
          box-shadow: -5px -3px 30px -10px #96bee7,
            4px 5px 30px 5px #101213;
          transition: all 0.4s ease;
        }

        .nav-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 0 25px rgba(150, 190, 231, 0.4);
        }

        .nav-btn:active {
          transform: scale(0.95);
        }

        .nav-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          box-shadow: none;
        }
      `}</style>
    </div>
  );
}