import React from "react";
import "./App.css";
import Section1 from "./components/Section-1";
import Section2 from "./components/Section-2";
import Section3 from "./components/Section-3";
import Section4 from "./components/Section-4/Section4";

const App: React.FC = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};

export default App;
