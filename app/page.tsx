"use client";

import React from "react";
import Image from "next/image";
import { useLightboxStore } from "@/hooks/useLightBoxModal";

const Home = () => {
  const images = [
    "/alley-way.jpg",
    "/desert.jpg",
    "/diver.jpg",
    "/fox.jpg",
    "/house.jpg",
    "/lion.jpg",
    "/mountain-climb.jpg",
    "/plant.jpg",
  ];

  const Lightbox = useLightboxStore();

  const onLightbox = (index: number) => {
    Lightbox.onOpen(images, index);
  };

  return (
    <>
      <main className="bg-slate-500">
        <p className="p-2 text-2xl font-sans font-medium text-white">
          Creating a super reusable Lightbox Modal!
        </p>
        <div className="grid grid-cols-3">
          {images.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                alt="test"
                width={250}
                height={250}
                onClick={() => onLightbox(index)}
                className="h-auto"
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
