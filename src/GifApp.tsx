import { useState } from 'react';
import { GifList } from './gifs/components/GifList';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action';
import type { Gif } from './gifs/interfaces/gif.interface';

const cachedGif: Record<string, Gif[]> = {};

export const GifApp = () => {
  const [previousSearches, setPreviousSearches] = useState([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleListElementClick = async (item: string) => {
    handleSearch(item);
  } 

  const handleSearch = async (query: string) => {
    query = query.trim().toLocaleLowerCase();
    if(query.length === 0) return;
    let data: Gif[];

    if(!previousSearches.includes(query)){
      setPreviousSearches([query, ...previousSearches].slice(0,6));
      data = await getGifsByQuery(query);
      cachedGif[query] = data;
    }else {
      
      data = cachedGif[query];
    }

    setGifs(data);
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
        <GifList gifs={gifs}/>
     </>
  )
}

