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
        `function transpose(matrix){
  // TODO: implement
}`
    }
    beforeExercise={
        `let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
`
    }
    afterExercise={
        `
console.log(transpose(matrix));
        `
    }
    submitTests={(code) => {
        const transpose = eval(`(${code})`);

        function arraysAreEqual(a, b) {
            return a.length === b.length && a.every((value, index) => value === b[index]);
        }


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

        // eslint-disable-next-line
        let res = transpose(matrix);
        if (JSON.stringify(res) != JSON.stringify(transposed)) return {
            input: matrix,
            output: res,
            correct: transposed
        }

        matrix = [
            [1, 2],
            [3, 4]
        ];

        transposed = [
            [1, 3],
            [2, 4]
        ];

        // eslint-disable-next-line
        res = transpose(matrix);
        if (JSON.stringify(res) != JSON.stringify(transposed)) return {
            input: matrix,
            output: res,
            correct: transposed
        }

        return {success: true};

    }}
/>

export default Transpose;