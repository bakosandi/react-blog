import { useEffect, useState } from "react";

const useAsync = (fn) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  // useEffectnek, amit átadok, sosem lehet Async, mert nem lett visszatérési értéke
  // egyből , amire szüksége van.
  useEffect(() => {
    fn().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, [fn]);
  return [data, loading];
};

export default useAsync;
