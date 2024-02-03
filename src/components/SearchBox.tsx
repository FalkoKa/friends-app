import { ChangeEventHandler } from 'react';

type Props = {
  searchChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

const SearchBox = ({ searchChange, placeholder }: Props) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder={placeholder}
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
