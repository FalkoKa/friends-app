import { ChangeEvent, useEffect, useState } from 'react';
import CardList from './components/CardList';
import Scroll from './components/Scroll';
import SearchBox from './components/SearchBox';
import Header from './components/Header';
import './App.css';
import { getData } from './utils/data.utils';

export type Robot = {
  id: number;
  name: string;
  email: string;
};

function App() {
  const [searchField, setSearchField] = useState<string>('');
  const [robots, setRobots] = useState<Robot[]>([]);
  const [filteredRobots, setFiltereRobots] = useState<Robot[]>(robots);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Robot[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setRobots(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredRobots = robots.filter((robot) => {
      return robot.name.toLocaleLowerCase().includes(searchField);
    });

    setFiltereRobots(newFilteredRobots);
  }, [robots, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchFIeldString = event.currentTarget.value.toLocaleLowerCase();
    setSearchField(searchFIeldString);
  };

  return (
    <div className="tc">
      <Header />
      <SearchBox searchChange={onSearchChange} placeholder="Search Robots" />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
