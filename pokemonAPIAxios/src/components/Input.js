import React,{useState} from 'react';
import axios from 'axios';
const Input = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const onClick = e => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807').then(response=>{
                return response.data;
            })
            .then(response => {
                setPokemon(response.results);
                console.log(response);
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