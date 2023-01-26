import { useReducer, useEffect } from 'react';
import { AnimalFavsReducer } from './AnimalFavsReducer';
import { AnimalFavsContext } from './AnimalFavsContext';

export interface AnimalFavsState {
    Animals: string[]
}

const Animals_INITIAL_STATE: AnimalFavsState = {
    Animals: [],
};

interface Props {
    children: React.ReactNode;
}

export const AnimalFavsProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(AnimalFavsReducer, Animals_INITIAL_STATE)

    const ToggleAnimals = async (animals: string) => {

        dispatch({ type: '[Toggle] - Toggle-Animals', payload: animals })

    }


    return (
        <AnimalFavsContext.Provider value={{
            ...state,
            ToggleAnimals
        }}>
            {children}
        </AnimalFavsContext.Provider>
    )
}