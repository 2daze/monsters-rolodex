import React from 'react';
import './SearchBox.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input 
      type='search' 
      placeholder={placeholder} 
      onChange={handleChange} />
  );
};
