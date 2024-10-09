import React from "react";
import { useNavigate } from 'react-router-dom';
import { useGames } from "../../contexts/games";
import { deleteData } from "../../shared/server";

const Card  = ({ name }) => {
    const navigate = useNavigate();
    const { games, setGames } = useGames();

    const handleBorrarClick = async (id) => {
        try {
            await deleteData('http://localhost:3000/api/games', id);
            setGames((prevGames) => prevGames.filter(game => game.id !== id));
        } catch(error) {
            console.log('Error al eliminar la tarea:', error);
        }
    };

    const handleDetallesClick = () => {
        navigate('/game/id');
    }

    return (
        <div>
            <h2>{name}</h2>
            <button onClick={handleDetallesClick}>Detalles</button>
            <button onClick={handleBorrarClick}>Borrar</button>
        </div>
    );
}

export default Card;