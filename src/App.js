import './App.css';
import { useEffect, useState } from 'react';

const ApiUrl = 'https://randomuser.me/api/';

function App() {
  const [names, setNames] = useState('');
  const [src, setSrc] = useState('');
  useEffect(() => {
    const Fetch = fetch(ApiUrl);
    Fetch
      .then(data => data.json())
      .then(datos => {
        console.log(datos.results);
        return (
          setNames(`${datos.results[0].name.first} ${datos.results[0].name.last}`),
          setSrc(`${datos.results[0].picture.large}`))
      }).catch(() => console.log('error'));
  }, []);

  return (
    <div>
      <p>{names}</p>
      <div><img src={src} alt='img' /></div>
    </div>
  );
};

export default App;
