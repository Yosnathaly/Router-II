import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import "../assets/css/Home.css"


export default function Home() {

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

    const irAPokemon = () => {
        navigate(`/Pokemones/${name}`)
    };
    
    return (
        
        <div className="container">
            <h1>Bienvenido Maestro Pokemon!</h1>
            <img className="photo" src="../src/assets/img/pngegg.png"  />
        </div>
    )


}