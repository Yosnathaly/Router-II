import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import "../assets/css/Selector.css"


export default function Selector() {

    const url = "https://pokeapi.co/api/v2/pokemon/"

    const [creatures, setCreatures] = useState([]);
    const [name, setName] = useState(0);


    const getData = async () => {
        const res = await fetch(url);
        const { results } = await res.json();

        setCreatures(results);
    }

    useEffect(() => {
        getData();

    }, []);

    
    const navigate = useNavigate();
    const recarga = () => {window.location.recarga(true)};

    const irAPokemon = () => {
        navigate(`/Pokemones/${name}`)
        recarga();
    };
    
    return (
        
        <div className="container">
            <h1>Selecciona tu Pokemon!</h1>
            
            <div className="seleccion">
            <Form.Select aria-label="Default select example" onChange={({target})=> {setName(target.value)}} >
             <option value="" disabled>Pokemones</option>   
            {creatures.map((creature, index)=> <option key={index} value={creature.name}>{creature.name}</option>

            )}
            </Form.Select>
            </div>
            <div className="boton">
            <button onClick={irAPokemon}>Ver Pokemon</button>
            </div>
            
        </div>
           )


        }