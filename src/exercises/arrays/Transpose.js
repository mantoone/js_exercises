import Exercise from '../Exercise';
import JSView from '../JSView';

const Transpose = () => <Exercise
    name="Matrix Transpose"
    description="In this exercise, you are required to write a function transpose(matrix) that takes a 2D array (matrix) as an argument and returns the transpose of that matrix. The transpose of a matrix is obtained by changing its rows into columns or vice versa."
    instructions={<ol>
        <li>Create a function named transpose that takes a 2D array (matrix) as an argument.</li>
        <li>Initialize an empty array to hold the transposed matrix.</li>
        <li>Use nested loops to iterate over the input matrix. The outer loop should iterate over the columns and the inner loop over the rows.</li>
        For each column, create a new row in the transposed matrix and fill it with the elements from the corresponding column in the input matrix.
        <li>Return the transposed matrix.</li>
    </ol>}
    examples={
        <div>
            <h3>Example:</h3>
            <p>Input:</p>
            <JSView value={`let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(transpose(matrix));`} />
            <p>Output:</p>
            <JSView value={`[
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
]`} />
        </div>
    }
    starterCode={
        `let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function transpose(matrix){
    // TODO: implement
}

console.log(transpose(matrix));`
    }
    submitTests={(exerciseVars) => {
        const transpose = exerciseVars.transpose;

        let matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];

        let transposed = [
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9]
        ];

        if (transpose(matrix) != transposed) return false;

        matrix = [
            [1, 2],
            [3, 4]
        ];

        transposed = [
            [1, 3],
            [2, 4]
        ];

        if (transpose(matrix) != transposed) return false;

        return true;

    }

    }
/>

export default Transpose;