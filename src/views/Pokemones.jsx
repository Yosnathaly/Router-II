import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "../assets/css/Pokemones.css"

export default function Pokemones() {

    const url = "https://pokeapi.co/api/v2/pokemon/"
    const [creature, setCreature] = useState({});
    const [photo, setPhoto] = useState([]);
    const [hp, setHp] = useState("");
    const [attack, setAttack] = useState("");
    const [defense, setDefense] = useState("");
    const [special, setSpecial] = useState("");
    const [speed, setSpeed] = useState("");

    const getData = async () => {
        const res = await fetch(url + name);
        const data = await res.json();

        setCreature(data);
        setPhoto(data.sprites.other.dream_world);
        setHp(data.stats[0]);
        setAttack(data.stats[1]);
        setDefense(data.stats[2]);
        setSpecial(data.stats[3]);
        setSpeed(data.stats[5]);

    }

    useEffect(() => {
        getData();

    }, []);
    const { name } = useParams();

    return (

        <div className="container">
            <Card className="card">
                <Card.Img  variant="top" src={photo.front_default} />
                <Card.Body>
                    <Card.Title>{creature.name}</Card.Title>
                    <div className="text">
                        <ul>
                            <li>HP: {hp.base_stat}</li>
                            <li>Attack:{attack.base_stat}</li>
                            <li>Defense:{defense.base_stat}</li>
                            <li>Attack Special:{special.base_stat}</li>
                            <li>Speed:{speed.base_stat}</li>
                        </ul>
                    </div>

                </Card.Body>
            </Card>




        </div>

    )


}