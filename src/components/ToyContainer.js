import React, { useContext } from "react";
import ToyCard from "./ToyCard";
import { ToysContext } from "../context/toys";


function ToyContainer() {
  const { toys } = useContext(ToysContext)


  const collectionOfToys = toys.map((toy) => {
    return <ToyCard toy={toy} />
  })

  return (
    <div id="toy-collection">{collectionOfToys}</div>
  );
}

export default ToyContainer;
