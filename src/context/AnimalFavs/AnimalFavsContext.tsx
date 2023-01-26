import { createContext } from 'react';

export interface AnimalFavsContextProps {
    Animals: string[];
    // Methods
    ToggleAnimals: (Animal: string) => void;
}

export const AnimalFavsContext = createContext({} as AnimalFavsContextProps);