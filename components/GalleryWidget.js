"use client";

import { useState } from 'react';
import { GalleryHorizontal, Plus, ArrowLeft, ArrowRight } from 'lucide-react'; 

export default function GalleryWidget() {
  const [images, setImages] = useState([1, 2, 3]);
  const addImage = () => {
    setImages([...images, images.length + 1]);
  };

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <GalleryHorizontal size={20} />
          <h2 className="text-xl font-semibold">Gallery</h2>
        </div>
        
        <div className="flex items-center gap-2">
          <button onClick={addImage} className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-full">
            <Plus size={16} />
            Add Image
          </button>
          <button className="p-1 bg-gray-700 rounded-full">
            <ArrowLeft size={16} />
          </button>
          <button className="p-1 bg-gray-700 rounded-full">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {images.map((imageKey) => (
          <div key={imageKey} className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center">
            Image {imageKey}
          </div>
        ))}
      </div>
    </div>
  );
}
