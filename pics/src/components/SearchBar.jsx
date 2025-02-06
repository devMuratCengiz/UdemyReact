import { useState } from "react";
import './SearchBar.css';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => { 
    e.preventDefault();
    onSubmit(term);
  }

  const handleChange = (e) => {
    setTerm(e.target.value);
  }

  return (
    <div>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input className="search-bar" value={term} onChange={handleChange} name="text" type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;