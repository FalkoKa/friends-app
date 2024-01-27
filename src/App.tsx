import CardList from './components/CardList';
import Scroll from './components/Scroll';
import { useEffect, useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

function App() {
  const [robots, setRobots] = useState<User[]>([]);
  const [searchfield, setSearchfield] = useState<string>('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const onSearchChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchfield(event.currentTarget.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
