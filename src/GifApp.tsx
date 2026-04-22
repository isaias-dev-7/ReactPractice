import { useState } from 'react';
import { GifList } from './gifs/components/GifList';
import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './gifs/components/PreviousSearches';

export const GifApp = () => {
  const [previousSearches, setPreviousSearches] = useState([]);

  const handleListElementClick = (item: string) => {
    console.log(item)
  } 

  const handleSearch = (query: string) => {
    query = query.trim().toLocaleLowerCase();
    if(query.length === 0) return;
    if(!previousSearches.includes(query)) setPreviousSearches([query, ...previousSearches].slice(0,6));
  }

  return (
     <>
        {/* Header */}
        <CustomHeader
          title='Searcher Gif'
          description='Find and shared the perfect gif'
        />

        {/* Search */}
        <SearchBar placeholder='Search gif' onQuery={handleSearch}/>
        
        {/* Previous search */}
        <PreviousSearches searches={previousSearches} query={handleListElementClick}/>

        {/* Gifs */}
        <GifList gifs={mockGifs}/>
     </>
  )
}

