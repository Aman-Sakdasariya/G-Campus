import React, { useState, useEffect } from "react";
import ImageZoomView from "./ImageZoomView";

const ImageGallery = ({ title, subTitle }) => {
  const [zoomToggle, setZoomToggle] = useState(false);
  const [zoomToggleImage, setZoomToggleImage] = useState("");

  useEffect(() => {
    document.body.style.overflow = zoomToggle ? "hidden" : "auto";
  }, [zoomToggle]);

  return (
    <div className="flex flex-col items-center w-full max-w-5xl">
      {zoomToggle && (
        <ImageZoomView
          img={zoomToggleImage}
          zoomToggle={zoomToggle}
          setZoomToggle={setZoomToggle}
        />
      )}
      <section className="text-gray-600 body-font w-full">
        <div className="px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-blue-600 hover:underline underline-offset-2 cursor-pointer">
              {title || "Title"}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
              {subTitle || "Sub Title"}
            </p>
          </div>

          {/* Box Container with Increased Size */}
          <div className="bg-white border rounded-xl shadow-lg p-8 sm:p-10 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {Array(6)
                .fill(null)
                .map((_, index) => (
                  <div key={index} className="flex justify-center">
                    <div className="w-60 h-60 sm:w-72 sm:h-72 flex items-center justify-center overflow-hidden rounded-md border">
                      <img
                        onClick={(e) => {
                          setZoomToggle(true);
                          setZoomToggleImage(e.target.currentSrc);
                        }}
                        title="Click to zoom in"
                        alt="gallery"
                        className="w-full h-full object-cover aspect-square cursor-zoom-in transition-transform duration-300 hover:scale-105"
                        src={`https://raw.githubusercontent.com/Aman-Sakdasariya/G-Campus/main/src/images/source/${title}-${index}.jpg`}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageGallery;
