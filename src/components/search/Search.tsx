import React, { ChangeEvent, useEffect, useState } from 'react';
import IconSearch from './IconSearch';
import s from "./Search.module.scss"

export const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isMobile, setIsMobile] = useState(false);


  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = sanitizeInput(e.target.value);
    setSearchValue(sanitizedValue);
  };

  const sanitizeInput = (input: string): string => {
    const parser = new DOMParser();
    const sanitizedDoc = parser.parseFromString(input, 'text/html');
    return sanitizedDoc.documentElement.textContent || '';
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Встановлюємо початковий стан "isMobile" при завантаженні компонента
    handleResize();

    // Додаємо слухач події "resize" для оновлення стану "isMobile"
    window.addEventListener('resize', handleResize);

    // Прибираємо слухач події при розмонтуванні компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    isMobile ? <IconSearch setIsMobile={setIsMobile} color='white' /> : <input
      className={s.inputSearch}
      type="text"
      value={searchValue}
      onChange={inputChangeHandler}
      placeholder="Search..."
    />

  );
};
