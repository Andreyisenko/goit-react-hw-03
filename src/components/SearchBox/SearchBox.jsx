import css from './SearchBox.module.css';
import { useId } from 'react';
const SearchBox = ({ inputValue, handleChange }) => {
const labId = useId()

  return (
    <div className={css.wrap}>
      <label htmlFor={labId}>Find contacts by name</label>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        id={labId}
        className={css.inp}
        name="search" placeholder='Search...'
      ></input>
       <p>{inputValue}</p>
    
    </div>
  );
};

export default SearchBox;
