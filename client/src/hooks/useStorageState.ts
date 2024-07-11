import { useEffect, useState } from 'react';

const useStorageState = <T,>(key: string, initialState: T) => {
  const [state, setState] = useState<T>(initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedState = localStorage.getItem(key);
    if (savedState) {
      setState(JSON.parse(savedState));
    }
    setLoading(false);
  }, [key]);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state, loading]);

  return [state, setState, loading] as const;
};

export default useStorageState;
