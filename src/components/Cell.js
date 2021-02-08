import React, { useContext, useState } from 'react'
import { GameGenerator } from '../components/GameGenerator';
import { GlobalContext } from '../context/GlobalState';

export const Cell = ({ value, id }) => {
    const { initialGrid, modify } = useContext(GlobalContext);
    var c = id % 9;
    var r = (id - c) / 9;
    return (
        <div>
            {initialGrid[r][c] === '.' ?
                <input
                    type='text'
                    value={value == '.' ? '' : value}
                    onChange={(e) => {
                        modify(r, c, e.target.value);
                    }}
                />
                : value}
        </div>
    )
}
