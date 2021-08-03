import React, { useState, useEffect } from "react";

const MyContext = React.createContext();

function ContextProvider({ children }) {
  //Add state to the provider and pass it through provider.
  const [catBreeds, setCatBreeds] = useState([]);

  const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

  const url = "https://api.thecatapi.com/v1/breeds";

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ACCESS_KEY,
    },
  };

  //As soon as ContextProvider renders gets the JSON data from the url.
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setCatBreeds(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [url]);

  console.log("catB", catBreeds);
  return (
    <MyContext.Provider value={{ catBreeds }}>{children}</MyContext.Provider>
  );
}

export { ContextProvider, MyContext };
