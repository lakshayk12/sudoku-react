import React, { useContext, useState } from 'react';
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
                    maxLength="1"
                    onChange={(e) => {
                        modify(r, c, e.target.value);
                    }}
                />
                : value}
        </div>
    )
}
