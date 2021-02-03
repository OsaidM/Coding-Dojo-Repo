import React,{useState} from 'react';

const Input = (props) => {
    const [pokemon, setPokemon] = useState([]);
 
    const onClick = e => {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
            .then(res => {
                return res.json();
            })
            .then(res => {
                setPokemon(res.results);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }
 
    return (
        <div>
            <input type="submit" onClick={onClick}/>
            {pokemon.map((poke, i) => (
                    <div key={i}>{poke.name}</div>
                ))}
        </div>
    );
}
export default Input;