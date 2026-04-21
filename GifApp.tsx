import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';

export const GifApp = () => {
  return (
     <>
        {/* Header */}
        <CustomHeader
          title='Searcher Gif'
          description='Find and shared the perfect gif'
        />

        {/* Search */}
        <SearchBar placeholder='Search gif'/>
        
        {/* Previous search */}
        <PreviousSearches/>

        {/* Gifs */}
        <GifList gifs={mockGifs}/>
     </>
  )
}

