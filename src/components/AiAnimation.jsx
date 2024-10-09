import { useLottie } from "lottie-react";
import React from "react";
import aiVisual from "../IYKE-Visual.json";

const AiAnimation = ({ loop = false }) => {
  const { View } = useLottie({ loop, animationData: aiVisual });

  return (
    /**
     *  AI Head animation
     */
    <>{View}</>
  );
};

export default AiAnimation;
