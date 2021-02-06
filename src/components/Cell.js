import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Cell = ({ col }) => {
    const { grid } = useContext(GlobalContext);
    const [val, setVal] = useState('');
    return (
        <div>
            {col === '.' ?
                <input
                    type='text'
                    value={val}
                    onChange={(e) => {
                        setVal(e.target.value)
                        grid[0][0] = e.target.value
                    }}
                />
                : col}
        </div>
    )
}
