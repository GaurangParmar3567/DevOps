import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChildProps from "./childProps.jsx";
import { useContext } from "react";
import { createContext } from "react";
import ToggleButton from "./Toggle.jsx";

const context = createContext("Default Value");
function App() {
  var a = 10;
  var b = 20;
  var c = a + b;
  var clr = "red";
  var clr2 = "blue";

  const [name, setName] = useState("Gaurang");
  const [name2, setName2] = useState("Mayur");
  const [count, setCount] = useState(0);
  const [StartOrEnd, setStartOrEnd] = useState("Y");

  useEffect(() => {
    if (count > 0 && StartOrEnd == "Y") {
      console.log("useEffect called");
      setCount(count + 1);
      console.log("Count is", count);
    }
  }, []);

  function changeName() {
    setName("Chnaged");
    setName2("Changed");
  }
  function startCount() {
    if (StartOrEnd == "Y") {
      setStartOrEnd("N");
      console.log("Count Stopped");
      return;
    } else {
      setStartOrEnd("Y");
      console.log("Count Started");
    }
    setCount(count + 1);
    console.log("Count is", count);
  }

  return (
    <>
      {/* < value={{ name, name2, setName }}>
        <h1>{count}</h1>
        <h1>Hello Handsome Mayur</h1>
        <p style={c == 30 ? { color: "blue" } : { color: "yellow" }} id="para1">
          {c == 30 ? `Hello Handsome Mayur ${name}` : "Hello Handsome Gaurang"}
        </p>
        <input type="button" value="Change Name" onClick={changeName} />
        <input type="button" value="Start Count" onClick={startCount} />
        <ChildProps />
        <AnotherChild name={name} name2={name2} ggpg={changeName} /> */}
      <ToggleButton />
    </>
  );
}

export default App;
export { context };
