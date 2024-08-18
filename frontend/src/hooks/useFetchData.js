import { useEffect, useState } from "react";

export function useFetchData(apiUrl) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let result = await response.json();
        setData(result);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [apiUrl]);

  return { data, error, isLoading };
}
