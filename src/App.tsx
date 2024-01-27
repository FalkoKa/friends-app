import CardList from './components/CardList';
import { connect } from 'react-redux';
import Scroll from './components/Scroll';
import { useEffect, useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import { setSearchField } from './actions';
import { State } from './reducers';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type Props = {
  searchField: string;
  onSearchChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

const mapStateToProps = (state: State) => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event: React.FormEvent<HTMLInputElement>) =>
      dispatch(setSearchField(event.currentTarget.value)),
  };
};

function App({ searchField, onSearchChange }: Props) {
  const [robots, setRobots] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
