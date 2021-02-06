import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Cell } from './Cell';

const Table = () => {
    const { grid } = useContext(GlobalContext);
    var i = 0;
    var j = 0;
    return (
        <div>
            <table className="sudoku">
                <tbody>
                    {grid.map(row => {
                        return (
                            <tr key={i += 1}>
                                {row.map(col => {
                                    return (
                                        <td key={j += 1}>
                                            <Cell col={col} />
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table
