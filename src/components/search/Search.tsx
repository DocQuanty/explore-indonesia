import React, { ChangeEvent, useState } from 'react';

export const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = sanitizeInput(e.target.value);
    setSearchValue(sanitizedValue);
  };

  const sanitizeInput = (input: string): string => {
    const parser = new DOMParser();
    const sanitizedDoc = parser.parseFromString(input, 'text/html');
    return sanitizedDoc.documentElement.textContent || '';
  };

  return (
    <input
      type="text"
      value={searchValue}
      onChange={inputChangeHandler}
      placeholder="Search..."
    />
  );
};
