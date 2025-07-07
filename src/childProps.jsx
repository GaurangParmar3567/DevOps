import React, { useContext } from "react";
import { context } from "./App.jsx";

const ChildProps = () => {
  //   console.log("ChildProps", props);
  //   props.ggpg();
  // const [name,setName] = React.useState("Gaurang");

  const contextValue = useContext(context);
  console.log("Context Value in Child:", contextValue);

  var a = 10;
  function f() {
    a = 15;
    contextValue.setName("name is changed");
    console.log("Function f called, a is now:", contextValue.name);
  }
  console.log(a);
  return (
    <div onClick={f} id="child">
      {contextValue.name} And {contextValue.name2}
    </div>
  );
};

export default ChildProps;
