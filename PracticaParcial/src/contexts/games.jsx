import { createContext, useContext, useState } from "react";

export const GamesContext = createContext();

export const useGames = () => {
    return useContext(GamesContext);
}

export function GamesProvider ({ children }) {
    const [games, setGames] = useState([]);

    return (
        <GamesContext.Provider value={{games, setGames}}>
            {children}
        </GamesContext.Provider>
    );
};