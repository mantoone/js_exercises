import Exercise from '../Exercise';
import JSView from '../JSView';

const FindMax = () => <Exercise
    name="Find Maximum"
    description="In this exercise, you are required to write a function findMax(array) that takes a 1D array as an argument and returns the maximum number in the array."
    instructions={<ol>
        <li>Create a function named findMax that takes a 1D array as an argument.</li>
        <li>Use the Math.max method along with the spread operator (...) to find the maximum number in the array.</li>
        <li>Return the maximum number.</li>
    </ol>}
    examples={
        <div>
            <h3>Example:</h3>
            <p>Input:</p>
            <JSView value={`let array = [1, 2, 3, 4, 5];
console.log(findMax(array));`} />
            <p>Output:</p>
            <JSView value={`5`} />
        </div>
    }
    starterCode={
        `function findMax(array){
  // TODO: implement
}`
    }
    beforeExercise={
        `let array = [1, 2, 3, 4, 5];
`
    }
    afterExercise={
        `
console.log(findMax(array));
        `
    }
    submitTests={(code) => {
        const findMax = eval(`(function() {
            ${code}
            return findMax;
        })()`);

        let array = [1, 2, 3, 4, 5];
        let max = 5;

        let res = findMax(array);
        if (res != max) return {
            input: array,
            output: res,
            correct: max
        }

        array = [-1, -2, -3, -4, -5];
        max = -1;

        res = findMax(array);
        if (res != max) return {
            input: array,
            output: res,
            correct: max
        }

        return {success: true};

    }}
/>

export default FindMax;