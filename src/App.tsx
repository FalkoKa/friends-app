import CardList from './components/CardList';
import Scroll from './components/Scroll';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState<string>('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  return (
    <>
      <div className="tc">
        <h1>Robofriends</h1>
        <Scroll>
          <CardList friends={robots} />
        </Scroll>
      </div>
    </>
  );
}

export default App;
