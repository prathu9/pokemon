import pokeActionTypes from "./poke.type"

export const fetchPokeStart = () => ({
    type: pokeActionTypes.FETCH_POKE_START
})

export const fetchPokeSuccess = (pokeData) => ({
    type: pokeActionTypes.FETCH_POKE_SUCCESS,
    payload: pokeData
})

export const fetchPokeFailure = (errMessage) => ({
    type: pokeActionTypes.FETCH_POKE_FAILURE,
    payload: errMessage
})

export const setCount = (count) => ({
    type: pokeActionTypes.SET_COUNT,
    payload: count
})

export const fetchPokeAsync = (count) => { 
    return dispatch => {
        dispatch(fetchPokeStart());
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${count}`)
        .then(res => res.json())
        .then(async (data) => {
            const {results} = data;
            let pokeArr = [];
            for(let i=0; i< results.length; i++){
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${results[i].name}`)
                const data =  await response.json();
                pokeArr.push(data);
            }
            dispatch(fetchPokeSuccess(pokeArr));
            console.log(typeof count, count)
            dispatch(setCount(count+10));
        })
        .catch(err => dispatch(fetchPokeFailure(err)))
    }
}