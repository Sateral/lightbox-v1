"use client";

import { useLightboxStore } from "@/hooks/useLightBoxModal";
import { ChevronLeftCircle, ChevronRightCircle, XCircle } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

export const Lightbox = () => {
  const Lightbox = useLightboxStore();
  const images = useLightboxStore((state) => state.data);
  const index = useLightboxStore((state) => state.currentIndex);

  return (
    <div>
      {Lightbox.isOpen && (
        <div className="fixed top-0 left-0 z-[9999] bg-black bg-opacity-80 w-full h-full">
          <div className="">
            <Image src={images[index]} alt="test" fill={true} />
            <div className="absolute top-2 right-2 text-xl text-primaryBg">
              {index + 1}/{images.length}
            </div>

            <div className="bg-black text-primaryBg bg-opacity-40 fixed bottom-0 left-0 w-full md:gap-32 gap-16 flex justify-center items-center p-2 text-3xl">
              <ChevronLeftCircle
                color="white"
                size={40}
                className="cursor-pointer"
                onClick={Lightbox.prevSlide}
              />
              <XCircle
                color="white"
                size={40}
                className="cursor-pointer"
                onClick={Lightbox.onClose}
              />
              <ChevronRightCircle
                color="white"
                size={40}
                className="cursor-pointer"
                onClick={Lightbox.nextSlide}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
