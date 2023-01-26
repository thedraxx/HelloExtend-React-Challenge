import { AnimalFavsState } from "./AnimalFavsProvider";


type entriesActionType =
    | { type: '[Toggle] - Toggle-Animals', payload: string }

export const AnimalFavsReducer = (state: AnimalFavsState, action: entriesActionType): AnimalFavsState => {
    switch (action.type) {

        case '[Toggle] - Toggle-Animals':
            if (state.Animals.includes(action.payload)) {
                const newList = state.Animals.filter((item: string) => item !== action.payload)
                return {
                    ...state, Animals: newList
                }
            }

            return {
                ...state,
                Animals: [...state.Animals, action.payload]
            }

        default:
            return state;
    }
}