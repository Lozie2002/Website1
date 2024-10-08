import React from "react";
import { Typewriter } from "react-simple-typewriter";
function Type() {
  return (
    <div>
      <Typewriter
        words={["Frontend Developer", "Freelancer", "Backend Developer"]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
}

export default Type;
