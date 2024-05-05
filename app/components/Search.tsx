import { useContext } from 'react';
import { SelectTime, ChooseDate, LocationSelection  } from '.';
import SearchBtn from './element/SearchBtn';
import { SearchContext, SearchContextValue } from '../context/search';
import SearchMobile from './SearchMobile'; // Importe o componente SearchMobile aqui

function Search() {
  const { isSearching } = useContext(SearchContext) as SearchContextValue;
  
  return (
    <>
      {/* Componente SearchMobile para dispositivos móveis */}
      <SearchMobile />
      {/* Componente Search para desktop */}
      <div className={`bg-white ${isSearching ? 'rounded-none xl:h-[80px]' : 'rounded-[20px] py-6 xl:pr-4 xl:h-[98px]'} hidden xl:block w-full shadow-lg`}>
        {/* xl:h-full flex items-center px-6 xl:px-0 */}
        <div className={`xl:h-full flex items-center ${isSearching && 'container mx-auto'}`}>
          <LocationSelection/>
          <ChooseDate/>
          <SelectTime/>
          <SearchBtn/>
        </div>
      </div>
    </>
  );
}

export default Search;
