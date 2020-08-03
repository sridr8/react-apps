import React, { useState } from "react";

function Happy() {
  const [isHappy, setIsHappy] = useState(true);
  return (
    <div>
      <h1 onClick={() => setIsHappy(!isHappy)}>{isHappy ? "😀" : "😐"}</h1>
    </div>
  );
}

export default Happy;
