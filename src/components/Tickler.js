import React from "react";
{/*a...we attach an event listerner to an element much like we add a prop.
b....takes a callback function as a value



*/}
function Tickler() {
  function tickle() {
    console.log("Teehee!");
  }

  return <button onClick={"tickle"}>Tickle me!</button>;
}

export default Tickler;
