import './poke-item.styles.css';

const PokeItem = ({pokemon}) => {
    const {name, sprites} = pokemon;
    return(
        <div className="pokemon-container">
            <img src={sprites.front_default} alt={name}/>
            <span>{name}</span>
        </div>
    )
}

export default PokeItem;
