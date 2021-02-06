import React, { createContext, useReducer } from 'react';

const initialState = {
    grid: [["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'MODIFY':
            return {
                ...state,
                grid: () => {
                    var tgrid = state.grid;
                    tgrid[action.payload.r][action.payload.c] = action.payload.value;
                    return tgrid;
                }
            }
    }
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value={{
            grid: state.grid
        }}>
            {children}
        </GlobalContext.Provider>
    );
}