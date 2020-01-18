import React, { useState } from 'react';
import { useFetch } from './useFetch';

function App() {
  const [number, setNumber] = useState();
  const [state, setState] = useState({ data: null, loading: false });

  const search = () => {
    setState({ loading: true });
    fetch(`http://numbersapi.com/${number}/trivia`)
      .then(res => res.text())
      .then(response => setState({ data: response }));
  };

  return (
    <div className='App'>
      <h2>Enter a number:</h2>
      <input
        type='text'
        value={number}
        placeholder='Type number here'
        onChange={e => setNumber(e.target.value)}
      />
      <button onClick={search}>Go</button>
      <div className='factDisplay'>
        {state.loading ? 'loading...' : state.data}
      </div>
    </div>
  );
}

export default App;
