import { connect } from "react-redux";
import { useEffect } from "react";
import {createStructuredSelector} from 'reselect';

import PokeItem from "../poke-item/poke-item.component";
import Loader from "../loader/loader.component";

import { selectPokeCount, selectPokeList, selectPokeLoading } from "../../redux/pokemon/poke.selectors";
import { fetchPokeAsync } from "../../redux/pokemon/poke.action";

import './poke-list.styles.css';

const PokeList = ({pokeList, fetchPokeAsync, count, isLoading}) => {
    useEffect(() => {
        fetchPokeAsync(0);
    },[fetchPokeAsync])


    return(
        <div className="pokeListContainer">
            {
            isLoading? <Loader/>:
             pokeList.map(pokemon => <PokeItem key={pokemon.name} pokemon={pokemon}/>)
            }
            <div className="load-more-btn-container">
                <button className="load-more-btn" onClick={() => fetchPokeAsync(count)}>
                    Load More
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    pokeList: selectPokeList,
    isLoading: selectPokeLoading,
    count: selectPokeCount
})

const mapDispatchToProps = dispatch => ({
    fetchPokeAsync: (count) => dispatch(fetchPokeAsync(count))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokeList);