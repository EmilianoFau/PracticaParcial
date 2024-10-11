import React, { useEffect, useState } from "react";
import Card from "../Card/card";
import { useGames } from "../../contexts/games";
import { getData } from "../../shared/server";
import Modal from "../Modal/modal";
import Styles from "./index.module.css";

const Home = () => {
  const { games, setGames } = useGames();
  const [openAddModal, setOpenAddModal] = useState(false);

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const datos = await getData("http://localhost:3000/api/games");
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
  };

  const closeModal = () => {
    setOpenAddModal(false);
  };
  return (
    <div className={Styles.homeContainer}>
      <h1>Practica Parcial</h1>
      <div className={Styles.buttonContainer}>
        <button className={Styles.addButton} onClick={openModal}>
          Agregar juego
        </button>
        {openAddModal && <Modal cerrarModal={closeModal} />}
      </div>
      <ul className={Styles.gamesList}>
        {games.map((game) => (
          <li key={game.id}>
            <Card game={game} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
