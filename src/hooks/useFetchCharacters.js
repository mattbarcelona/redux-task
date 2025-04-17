import { useEffect, useState } from "react";

export const useFetchCharacter = (url) => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setCharacter(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { character, loading };
};
