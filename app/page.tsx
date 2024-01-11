"use client";

import React from "react";
import Image from "next/image";
import { useLightboxStore } from "@/hooks/useLightBoxModal";

const Home = () => {
  const images = [
    "/alley-way.webp",
    "/desert.webp",
    "/diver.webp",
    "/fox.webp",
    "/house.webp",
    "/lion.webp",
    "/mountain-climb.webp",
    "/plant.webp",
  ];

  const Lightbox = useLightboxStore();

  const onLightbox = (index: number) => {
    Lightbox.onOpen(images, index);
  };

  return (
    <>
      <main className="bg-[#111]">
        <p className="p-2 text-2xl font-sans font-medium text-white">
          Creating a super reusable Lightbox Modal!
        </p>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 m-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 border-white border-2"
            >
              <img
                src={image}
                alt="test"
                onClick={() => onLightbox(index)}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
