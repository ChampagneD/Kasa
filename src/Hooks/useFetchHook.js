import React, { useState, useEffect } from "react";

export default function useFetch() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("/logements.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <p>Une erreur est survenue : {error.message}</p>;
  }

  if (isLoading) {
    return <p>Chargement en cours...</p>;
  }

  return { data };
}
