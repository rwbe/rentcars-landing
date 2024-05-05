'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

export type SearchContextValue = {
  isSearching: boolean;
  setIsSearching: (searching: boolean) => void;
}

export const SearchContext = createContext<SearchContextValue | undefined>(undefined);

interface SearchContextProviderProps {
  children: ReactNode;
}

export const SearchContextProvider: React.FC<SearchContextProviderProps> = ({ children }) => {
  const [isSearching, setIsSearching] = useState<boolean>(false);

 const contextValue: SearchContextValue = {
    isSearching,
    setIsSearching,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  )
};

export const useSearchContext = (): SearchContextValue | undefined => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchContextProvider');
  }
  return context;
};
