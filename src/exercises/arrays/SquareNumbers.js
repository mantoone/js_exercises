import Exercise from '../Exercise';
import JSView from '../JSView';

const SquareNumbers = () => <Exercise
    name="Square Numbers"
    description="In this exercise, you are required to write a function squareNumbers(array) that takes a 1D array as an argument and returns a new array with each number squared."
    instructions={<ol>
        <li>Create a function named squareNumbers that takes a 1D array as an argument.</li>
        <li>Use the map method of the array to create a new array with each number squared.</li>
        <li>Return the new array.</li>
    </ol>}
    examples={
        <div>
            <h3>Example:</h3>
            <p>Input:</p>
            <JSView value={`let array = [1, 2, 3, 4, 5];
console.log(squareNumbers(array));`} />
            <p>Output:</p>
            <JSView value={`[1, 4, 9, 16, 25]`} />
        </div>
    }
    starterCode={
        `function squareNumbers(array){
  // TODO: implement
}`
    }
    beforeExercise={
        `let array = [1, 2, 3, 4, 5];
`
    }
    afterExercise={
        `
console.log(squareNumbers(array));
        `
    }
    submitTests={(code) => {
        const squareNumbers = eval(`(function() {
            ${code}
            return squareNumbers;
        })()`);

        let array = [1, 2, 3, 4, 5];
        let squared = [1, 4, 9, 16, 25];

        let res = squareNumbers(array);
        if (JSON.stringify(res) != JSON.stringify(squared)) return {
            input: array,
            output: res,
            correct: squared
        }

        array = [-1, -2, -3, -4, -5];
        squared = [1, 4, 9, 16, 25];

        res = squareNumbers(array);
        if (JSON.stringify(res) != JSON.stringify(squared)) return {
            input: array,
            output: res,
            correct: squared
        }

        return {success: true};

    }}
/>

export default SquareNumbers;