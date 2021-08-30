
const initialState = {}


type InitialStateType = typeof initialState

export const cardsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'CARDS/SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}

export const setCardsStatusAC = () => ({
    type: 'CARDS/SET-STATUS',
    status
} as const)

type ActionsType = ReturnType<typeof setCardsStatusAC>
