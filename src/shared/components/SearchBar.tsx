import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
    placeholder?: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = 'Search', onQuery }: Props) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(value);
    },900);

    return () => {
      clearTimeout(timeoutId);
    }
  },[value, onQuery])

  const handleSearch = () => {
    onQuery(value);
    //setValue('');
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') handleSearch();
  }

  return (
    <div className="search-container">
        <input 
            type="text"
            value={ value } 
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={ handleKeyDown }
            placeholder={ placeholder }
        />
        <button onClick={ handleSearch }>Buscar</button>
    </div>
  );
}
