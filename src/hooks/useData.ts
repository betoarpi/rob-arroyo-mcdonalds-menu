import { useEffect, useState } from "react";

interface UseDataInterface {
  data: Record<string, any> | undefined;
  isLoading: boolean;
}

function useData(): UseDataInterface {
  const [data, setData] = useState<Record<string, any> | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const requestOptions = {
    method: "GET",
  };

  useEffect(() => {
    let isMounted = true;

    setIsLoading(true);
    fetch("https://mcdonalds.trio.dev/menu", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        if (isMounted) {
          setData(result);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        console.log("Error while fetching data");
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    data,
    isLoading,
  };
}

export default useData;
