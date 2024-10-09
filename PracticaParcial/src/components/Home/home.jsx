import React, {useEffect, useState} from "react";
import Card from "../Card/card";
import { useGames } from "../../contexts/games";
import { dataFetcher } from "../../shared/server";

const Home = () => {
    const { games, setGames } = useGames();
    const [openAddModal, setOpenAddModal] = useState(false);

    useEffect(() => {
        const fetchDatos = async () => {
          try {
            const datos = await dataFetcher('http://localhost:3000/api/games');
            setGames(datos);
            console.log(datos);
          } catch (e) {
            console.error(e);
          }
        };
    
        fetchDatos();
      }, [setGames]);

      const openModal = () => {
        setOpenAddModal(true);
      }

      const closeModal = () => {
        setOpenAddModal(false);
      }
    return (
        <div>
            <h1>Practica Parcial</h1>
            <button onClick={openModal}>Agregar juego</button>
            {openAddModal && (
                <Modal
                    cerrarModal={closeModal}
                />
            )}
            <ul className="gamesList">
                {games.map(game => (
                    <li key={game.id}>
                        <Card name={game.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;