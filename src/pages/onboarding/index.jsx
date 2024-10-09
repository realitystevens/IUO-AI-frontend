import React from "react";
import { useState } from "react";
import One from "./one";
import Two from "./two";

const Onboarding = () => {
  const [screenIndex, setScreenIndex] = useState(0);

  return screenIndex === 0 ? (
    <One setScreenIndex={setScreenIndex} />
  ) : (
    <Two setScreenIndex={setScreenIndex} />
  );
};

export default Onboarding;
