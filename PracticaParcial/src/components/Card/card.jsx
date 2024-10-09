import React from "react";
import { useNavigate } from 'react-router-dom';
import { useGames } from "../../contexts/games";
import { deleteData } from "../../shared/server";
import Styles from './index.module.css';

const Card  = ({ game }) => {
    const navigate = useNavigate();
    const { games, setGames } = useGames();

    const handleBorrarClick = async (id) => {
        try {
            await deleteData('http://localhost:3000/api/games', id);
            setGames((prevGames) => prevGames.filter(game => game.id !== id));
        } catch(error) {
            console.log('Error al eliminar el juego: ', error);
        }
    };

    const handleDetailsClick = (id) => {
        navigate(`/game/${id}`);
    }

    return (
        <div className = {Styles.cardStructure}>
            <h2 className={Styles.title}>{game.title}</h2>
            <div className = {Styles.buttons}>
                <button className = {Styles.cardButton} onClick={() => handleDetailsClick(game.id)}>Detalles</button>
                <button className = {`${Styles.cardButton} ${Styles.deleteButton}`} onClick={() => handleBorrarClick(game.id)}>Borrar</button>
            </div>
        </div>
    );
}

export default Card;