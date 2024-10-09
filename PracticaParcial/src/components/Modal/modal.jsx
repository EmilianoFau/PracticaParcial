import React, {useState} from "react";
import { useGames } from "../../contexts/games";
import { postData } from "../../shared/server";

const Modal = ({ game, cerrarModal }) => {
    const { setGames } = useGames();

    const [categories, setCategories] = useState('');
    const [description, setDescription] = useState('');
    const [players, setPlayers] = useState('');
    const [title, setTitle] = useState('');

    const jsonifyGame = () => {
        return {
            title: title, 
            description: description,
            players: players,
            categories: categories,
            id: game.id
        }
    }

    const handleAgregarJuego = async (event) => {
        event.preventDefault();
        const newGame = jsonifyGame();

        console.log('Nuevo juego antes de agregar: ', newGame);

        try {
            const response = await postData('http://localhost:3000/api/games');

            if (response.id) {
                console.log('Juego agregado: ', response);
                setGames((prevGames) => [...prevGames, response]);
            }

            cerrarModal();
        } catch(error) {
            console.error("Error: ", error);
         }
    }

    return (
        <div className="modal">
            <h2>Agregar juego</h2>
            <form onSubmit={handleAgregarJuego}>
                <div>
                    <label>Title</label>
                    <div>
                        <input type="text" placeholder="Game title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                </div>

                <div>
                    <label>Description</label>
                    <div>
                        <input type="text" placeholder="Game description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                </div>

                <div>
                    <label>Categories</label>
                    <div>
                        <input type="text" placeholder="Game categories" value={categories} onChange={(e) => setCategories(e.target.value)} />
                    </div>
                </div>

                <div>
                    <label>Players</label>
                    <div>
                        <input type="text" placeholder="Game players" value={players} onChange={(e) => setPlayers(e.target.value)} />
                    </div>
                </div>

                <button type="submit">Agregar</button>
                <button onClick={cerrarModal}>Cancelar</button>
            </form>
        </div>
    )
}

export default Modal;