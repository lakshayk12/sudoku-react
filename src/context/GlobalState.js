import React, { createContext, useReducer } from 'react';
import { GameGenerator } from '../components/GameGenerator';

export const initialGrid = GameGenerator();

const initialState = {
    grid: initialGrid.map(l => ([...l])) //deep copy
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
        case 'SOLVE':
            return {
                ...state,
                grid: action.payload.answer
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
    }

    function solve(answer) {
        dispatch({ type: 'SOLVE', payload: { answer } });
    }

    return (
        <GlobalContext.Provider value={{
            initialGrid,
            grid: state.grid,
            modify,
            solve
        }}>
            {children}
        </GlobalContext.Provider>
    );
}