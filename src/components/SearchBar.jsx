import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import "../css/SearchBar.css";

const SearchBar = () => {
  const history = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  
  const handleSearchClick = () => {
    if (inputValue.trim() !== '') {
      history(`/searchresult?query=${inputValue}`);
      setInputValue("");
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      alert('Search cannot be empty!');
    }
  };
   
  return (
    <div className="search-container">
       <input
         type="text"
         placeholder="Search..."
         value={inputValue}
         onChange={handleChange}
       />
       <button onClick={handleSearchClick} className="search-button">
         <FaSearch className="search-icon" size={20} />
       </button>
    </div>
  );
};  

export default SearchBar;