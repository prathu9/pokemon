import pokeActionTypes from "./poke.type";

const INITIAL_STATE = {
    pokeList: [],
    count: 0,
    isLoading: true,
    error: ""
}

const pokeReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case pokeActionTypes.FETCH_POKE_START:
            return {
                ...state,
                isLoading: true
            }
        case pokeActionTypes.FETCH_POKE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pokeList: action.payload || []
            }
        case pokeActionTypes.FETCH_POKE_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        case pokeActionTypes.SET_COUNT:
            return{
                ...state,
                count: action.payload
            }
        default:
            return state
    }
}

export default pokeReducer;