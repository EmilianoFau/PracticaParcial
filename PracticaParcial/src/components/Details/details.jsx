import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getElement } from "../../shared/server";
import Styles from './index.module.css';

const Details = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [currentGame, setCurrentGame] = useState(null);

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const data = await getElement('http://localhost:3000/api/games', id);
                setCurrentGame(data[0]);
            } catch (error) {
                console.error("Error al obtener el juego: ", error);
            }
        };
        fetchGame();
    }, [id]);

    const handleBackClick = () => {
        navigate('/');
    }

    return (
        <div>
            <button onClick={handleBackClick}>Back</button>
            {currentGame ? (
                <>
                    <div>
                    <h2>Nombre</h2>
                    <h3>{currentGame.title}</h3>
                    </div>
                    <div>
                        <h2>Descripción</h2>
                        <h3>{currentGame.description}</h3>
                    </div>
                    <div>
                        <h2>Cantidad de jugadores</h2>
                        <h3>{currentGame.players}</h3>
                    </div>
                    <div>
                        <h2>Categorías</h2>
                        <h3>{currentGame.categories}</h3>
                    </div>
                </>
            ) : (
                <p>Cargando juego...</p>
            )}
        </div>
    )
}

export default Details;