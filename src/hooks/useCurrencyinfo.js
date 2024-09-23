import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);  
        setData(res[currency]);  
      })
      .catch((err) => console.error("Failed to fetch currency data:", err));  
  }, [currency]);

  // Log data after it updates
  useEffect(() => {
    console.log(data);
  }, [data]);

  return data;
}

export default useCurrencyinfo;
