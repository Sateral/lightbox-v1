"use client";

import { useEffect, useState } from "react";
import { Lightbox } from "@/components/ui/lightbox";

const LightboxProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <Lightbox />;
};

export default LightboxProvider;
