import React, { useContext } from "react";
import { ToysContext } from "../context/toys";

function ToyCard({ toy }) {
  const { donate, toys, setToys } = useContext(ToysContext)

  function addLike(likedToy) {
    fetch(`http://localhost:3001/toys/${likedToy[0].id}`, {
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(likedToy[0])
    })
    .then(resp => resp.json())
    .then(() => setToys([...toys, likedToy]))
  
  }
  
  function likeClick(toyObj) {
    const likedToy = toys.filter((toy) => toy.id === toyObj.id)
    likedToy[0].likes += 1
    addLike(likedToy)
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={() => likeClick(toy)}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => donate(toy.id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
