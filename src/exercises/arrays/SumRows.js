import Exercise from '../Exercise';
import JSView from '../JSView';

const SumRows = () => <Exercise
    name="Sum Rows"
    description="In this exercise, you are required to write a function sumRows(matrix) that takes a 2D array (matrix) as an argument and returns an array where each element is the sum of the corresponding row in the matrix."
    instructions={<ol>
        <li>Create a function named sumRows that takes a 2D array (matrix) as an argument.</li>
        <li>Initialize an empty array to hold the sums.</li>
        <li>Use a loop to iterate over the rows in the matrix. For each row, use the reduce method to calculate the sum of the elements in the row, and add this sum to the sums array.</li>
        <li>Return the sums array.</li>
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
console.log(sumRows(matrix));`} />
            <p>Output:</p>
            <JSView value={`[6, 15, 24]`} />
        </div>
    }
    starterCode={
        `function sumRows(matrix){
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
console.log(sumRows(matrix));
        `
    }
    submitTests={(code) => {
        const sumRows = eval(`(function() {
            ${code}
            return sumRows;
        })()`);

        let matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];

        let sums = [6, 15, 24];

        let res = sumRows(matrix);
        if (JSON.stringify(res) != JSON.stringify(sums)) return {
            input: matrix,
            output: res,
            correct: sums
        }

        matrix = [
            [1, 2],
            [3, 4]
        ];

        sums = [3, 7];

        res = sumRows(matrix);
        if (JSON.stringify(res) != JSON.stringify(sums)) return {
            input: matrix,
            output: res,
            correct: sums
        }

        return {success: true};

    }}
/>

export default SumRows;