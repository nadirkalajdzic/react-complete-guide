import React, { useState } from "react";

function Greeting() {
  const [isVisible, setIsVisible] = useState(false);

  const changeVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div>
      {isVisible && (
        <>
          <h2>Hello World!</h2>
          <p>It's good to see you!</p>
        </>
      )}
      <button onClick={changeVisibility}>Toggle visible</button>
    </div>
  );
}

export default Greeting;
