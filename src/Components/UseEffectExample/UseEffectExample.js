import { useEffect } from "react";
function UseEffectExample() {
  console.log("rendreing component");
  useEffect(() => {
    console.log("inside useEffect");
  });
  return <h1>Use Effect Example</h1>;
}

export default UseEffectExample;
