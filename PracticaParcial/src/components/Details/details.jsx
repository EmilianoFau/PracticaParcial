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
        <div className={Styles.detailsContainer}>
            <div className={Styles.backButtonContainer}>
                <button onClick={handleBackClick} className={Styles.backButton}>Back</button>
            </div>
            {currentGame ? (
                <>
                    <div className={Styles.infoContainer}>
                    <h2 className={Styles.titles}>Nombre</h2>
                    <h3 className={Styles.info}>{currentGame.title}</h3>
                    </div>
                    <div className={Styles.infoContainer}>
                        <h2 className={Styles.titles}>Descripción</h2>
                        <h3 className={Styles.info}>{currentGame.description}</h3>
                    </div>
                    <div className={Styles.infoContainer}>
                        <h2 className={Styles.titles}>Cantidad de jugadores</h2>
                        <h3 className={Styles.info}>{currentGame.players}</h3>
                    </div>
                    <div className={Styles.infoContainer}>
                        <h2 className={Styles.titles}>Categorías</h2>
                        <h3 className={Styles.info}>{currentGame.categories}</h3>
                    </div>
                </>
            ) : (
                <p className={Styles.loading}>Cargando juego...</p>
            )}
        </div>
    )
}

export default Details;