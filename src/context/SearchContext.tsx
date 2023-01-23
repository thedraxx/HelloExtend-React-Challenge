import { createContext } from 'react';

export interface SearchContextProps {
    search: string;
    // Methods
    sendSearch: (UserSearch: string) => void;
}

export const SearchContext = createContext({} as SearchContextProps);