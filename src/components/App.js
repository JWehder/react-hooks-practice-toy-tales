import React, { useState } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
import { ToysProvider } from "../context/toys";

function App() {
  const [showForm, setShowForm] = useState(false);
  

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  
  return (
    <>
      <ToysProvider>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer />
      </ToysProvider>
    </>
  );
}

export default App;
