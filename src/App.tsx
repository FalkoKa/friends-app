import CardList from './components/CardList';
import { connect } from 'react-redux';
import Scroll from './components/Scroll';
import { useEffect } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import { setSearchField } from './actions';
import { Dispatch } from 'redux';
import { requestRobots } from './actions';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type Props = {
  searchField: string;
  onSearchChange: (event: React.FormEvent<HTMLInputElement>) => void;
  onRequestRobots: () => void;
  robots: User[];
  error: string;
  isPending: boolean;
};

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.idPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onSearchChange: (event: React.FormEvent<HTMLInputElement>) =>
      dispatch(setSearchField(event.currentTarget.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

function App({
  searchField,
  onSearchChange,
  onRequestRobots,
  robots,
  isPending,
}: Props) {
  useEffect(() => {
    console.log(onRequestRobots);
    onRequestRobots();
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return isPending ? (
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
