export class SudokuSolver {
    constructor(board) {
        this.board = board;
    }

    findEmptyLoc = () => {
        for (let i = 0; i < 9; ++i) {
            for (let j = 0; j < 9; ++j) {
                if (this.board[i][j] == "." || this.board[i][j] == "" || this.board[i][j] == " ") {
                    return [true, i, j];
                }
            }
        }
        return [false, -1, -1];
    }

    isSafe = (row, col, num) => {
        //check col
        for (let i = 0; i < 9; ++i) {
            if (this.board[i][col] == num) {
                return false;
            }
        }

        //check row
        for (let j = 0; j < 9; ++j) {
            if (this.board[row][j] == num) {
                return false;
            }
        }

        //3x3 matrix
        let startRow = row - (row % 3);
        let startCol = col - (col % 3);
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; ++j) {
                let r = i + startRow;
                let c = j + startCol;
                if (this.board[r][c] == num) {
                    return false;
                }
            }
        }
        return true;
    }

    solver = () => {
        let [con, row, col] = this.findEmptyLoc();
        if (!con) {
            return true;
        }

        for (let i = 1; i <= 9; ++i) {
            let num = i.toString();
            if (this.isSafe(row, col, num)) {
                this.board[row][col] = num;
                if (this.solver()) {
                    return true;
                }
                this.board[row][col] = '.';
            }
        }
        return false;
    }

    solve = () => {
        this.solver();
        return this.board;
    }
}

export default SudokuSolver;