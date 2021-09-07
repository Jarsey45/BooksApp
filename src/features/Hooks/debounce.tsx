import { useEffect, useState } from "react";


const useDebounced = (value: string) => {
  const [debounced, setDebounced] = useState<string>(value);

  useEffect(() => {

    const unSub = setTimeout(() => {
      setDebounced(value);
    }, 300)

    return () => {
      clearTimeout(unSub);
    }
  }, [value])

  return debounced;
}


export default useDebounced;