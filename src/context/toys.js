import React, { createContext, useEffect, useState } from "react";

const ToysContext = createContext();

function ToysProvider({ children }) {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/toys')
        .then(resp => resp.json())
        .then(toys => setToys(toys))
    }, [])

    function donate(id) {
        fetch(`http://localhost:3001/toys/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(() => deleteToy(id))
    }

    function deleteToy(toyId) {
        const newToyList = toys.filter((toy) => toy.id !== toyId)
        setToys(newToyList)
    }

    function addNewToy(toyObj) {
        fetch('http://localhost:3001/toys', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toyObj)
        })
          .then(resp => resp.json())
          .then(toy => addToy(toy))
      }
    
      function addToy(newToyObj) {
        setToys([...toys, newToyObj])
      }


    return <ToysContext.Provider value= {{ toys, addNewToy, donate, setToys }}>{children}</ToysContext.Provider>
}

export { ToysProvider, ToysContext }