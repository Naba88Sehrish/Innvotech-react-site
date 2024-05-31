import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const techImages = [
  { id: 1, src: 'Assets/Images/java.png', alt: 'Technology 1' },
  { id: 2, src: 'Assets/Images/phython.png', alt: 'Technology 2' },  
  { id: 3, src: 'Assets/Images/php.png', alt: 'Technology 3' },
  { id: 4, src: 'Assets/Images/SQL.png', alt: 'Technology 4' },
  { id: 5, src: 'Assets/Images/HTML.png', alt: 'Technology 5' },
  { id: 6, src: 'Assets/Images/My-sql.png', alt: 'Technology 6' },
  { id: 12, src: 'Assets/Images/oracal.png', alt: 'Technology 12' },
  { id: 13, src: 'Assets/Images/apache.png', alt: 'Technology 13' },
  { id: 7, src: 'Assets/Images/net.png', alt: 'Technology 7' },
  { id: 8, src: 'Assets/Images/structure.png', alt: 'Technology 8' },
  { id: 9, src: 'Assets/Images/angular.png', alt: 'Technology 9' },
  { id: 10, src: 'Assets/Images/Bootstrap.png', alt: 'Technology 10' },
  { id: 11, src: 'Assets/Images/apple.png', alt: 'Technology 11' },
  { id: 14, src: 'Assets/Images/android.png', alt: 'Technology 14' },
  { id: 15, src: 'Assets/Images/window.png', alt: 'Technology 15' },
];

const Technologies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < techImages.length - 3) { // Show three images per slide
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <h1 className='text-[2rem] p-10 text-center text-[#135682] font-bold'>Technologies We Use...</h1>
      <div className="relative w-full max-w-4xl mx-auto my-5">
        <div className="flex items-center justify-between">
          <button 
            onClick={prevSlide} 
            className={`p-2 ml-4 bg-gray-200 rounded-full ${currentIndex === 0 ? 'cursor-not-allowed' : ''}`} 
            disabled={currentIndex === 0}
          >
            <FaArrowLeft />
          </button>
          <div className="flex overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }} // Adjust for three images
            >
              {techImages.map((image, index) => (
                <div key={image.id} className="flex-shrink-0 w-1/3 px-4"> {/* Adjust width for three images */}
                  <div className="flex justify-center items-center h-full"> {/* Center the image */}
                    <img src={image.src} alt={image.alt} className="w-20 h-auto object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={nextSlide} 
            className={`p-2 bg-gray-200 rounded-full ${currentIndex >= techImages.length - 3 ? 'cursor-not-allowed' : ''}`} 
            disabled={currentIndex >= techImages.length - 3}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Technologies;
