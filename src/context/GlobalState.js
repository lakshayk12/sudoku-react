import React, { createContext, useReducer } from 'react';
import { GameGenerator } from '../components/GameGenerator';

const initialState = {
    grid: GameGenerator()
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'MODIFY':
            var tgrid = state.grid;
            tgrid[action.payload.r][action.payload.c] = action.payload.value;
            return {
                ...state,
                grid: tgrid
            }
        default:
            return state;
    }
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function modify(r, c, value) {
        dispatch({ type: 'MODIFY', payload: { r, c, value } });
        console.log("after dispatch: ", state.grid);
    }

    return (
        <GlobalContext.Provider value={{
            grid: state.grid,
            modify
        }}>
            {children}
        </GlobalContext.Provider>
    );
}