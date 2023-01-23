import { useState } from 'react';
import { SearchContext } from './SearchContext';

export interface SearchState {
    search: string,
}

interface Props {
    children: React.ReactNode;
}

export const SearchProvider = ({ children }: Props) => {

    const [search, setSearch] = useState('')

    const sendSearch = (UserSearch: string) => {
        setSearch(UserSearch)
    };

    return (
        <SearchContext.Provider value={{
            sendSearch,
            search,
        }}>
            {children}
        </SearchContext.Provider>
    )
}