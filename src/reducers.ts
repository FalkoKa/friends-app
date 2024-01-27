import { UnknownAction } from 'redux';
import { CHANGE_SEARCH_FIELD } from './constants';

export type State = {
  searchField: string;
};

const initialState = {
  searchField: '',
};

export const searchRobots = (state = initialState, action: UnknownAction) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
