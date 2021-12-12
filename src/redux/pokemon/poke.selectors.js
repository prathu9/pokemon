import {createSelector} from "reselect";

const selectPoke = state => state.pokeData;

export const selectPokeList = createSelector(
    [selectPoke],
    pokeData => pokeData.pokeList
)

export const selectPokeLoading = createSelector(
    [selectPoke],
    pokeData => pokeData.isLoading
)

export const selectPokeCount = createSelector(
    [selectPoke],
    pokeData => pokeData.count
)