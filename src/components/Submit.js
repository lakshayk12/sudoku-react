import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SudokuSolver } from '../components/SudokuSolver'

toast.configure()
const Submit = () => {
    const { initialGrid, grid, solve } = useContext(GlobalContext);

    const compare = (answer) => {
        for (let i = 0; i < 9; ++i) {
            for (let j = 0; j < 9; ++j) {
                if (!(grid[i][j] == answer[i][j])) {
                    return false;
                }
            }
        }
        return true;
    }

    const giveVerdict = (e) => {
        e.preventDefault()
        let sudokuSolver = new SudokuSolver(initialGrid.map(l => ([...l])));
        const answer = sudokuSolver.solve();
        let result = compare(answer);
        if (result) {
            toast.success('Successful', { autoClose: 3000 });
        }
        else {
            toast.error('Wrong, Please try again!', { autoClose: 3000 });
        }
    }

    const solveForMe = (e) => {
        e.preventDefault();
        let sudokuSolver = new SudokuSolver(initialGrid.map(l => ([...l])));
        const answer = sudokuSolver.solve();
        solve(answer);
        toast.success('Solved! just for you ;)', { autoClose: 3000 });
    }

    return (
        <div>
            <button onClick={giveVerdict}>Submit</button>
            <button onClick={solveForMe}>Solve for me</button>
        </div>
    )
}

export default Submit
