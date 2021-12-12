import { combineReducers } from "redux";
import pokeReducer from "./pokemon/poke.reducer";


const rootReducer = combineReducers({
    pokeData: pokeReducer
})

export default rootReducer;
