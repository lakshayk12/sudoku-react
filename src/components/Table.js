import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Cell } from './Cell';

const Table = () => {
    const { grid } = useContext(GlobalContext);
    var i = -1;
    var j = -1; //used for cell value, id given to cell is 0 indexed can be used to get r, c in GlobalState
    return (
        <div>
            <table className="sudoku">
                <tbody>
                    {grid.map(row => {
                        return (
                            <tr key={i += 1}>
                                {row.map(col => {
                                    j++;
                                    return (
                                        <td key={j}>
                                            <Cell value={col} id={j} />
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
