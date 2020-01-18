import { useEffect, useState } from 'react';

export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    setState({ data: null, loading: true });
    fetch(url)
      .then(res => res.text())
      .then(response => {
        setState({ data: response, loading: false });
      });
  }, [url]);

  return state;
};
