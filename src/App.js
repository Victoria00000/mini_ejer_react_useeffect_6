import './App.css';
import { useEffect, useState } from 'react';
import { User } from './User.js';

const ApiUrl = 'https://randomuser.me/api/?results=3';
const Fetch = fetch(ApiUrl);

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Fetch
      .then(rta => rta.json())
      .then(rta2 => {
        console.log(rta2.results);
        return setData(rta2.results)
      })
      .catch(() => console.log('error'));
  }, []);

  return (
    <div>
      <User data={data} />
    </div>
  )
};

export default App;
