import Exercise from '../Exercise';
import JSView from '../JSView';

const FilterEvenNumbers = () => <Exercise
    name="Filter Even Numbers"
    description="In this exercise, you are required to write a function filterEvenNumbers(array) that takes a 1D array as an argument and returns a new array with only the odd numbers."
    instructions={<ol>
        <li>Create a function named filterEvenNumbers that takes a 1D array as an argument.</li>
        <li>Use the filter method of the array to create a new array with only the odd numbers. You can use the modulo operator (%) to determine if a number is odd.</li>
        <li>Return the new array.</li>
    </ol>}
    examples={
        <div>
            <h3>Example:</h3>
            <p>Input:</p>
            <JSView value={`let array = [1, 2, 3, 4, 5];
console.log(filterEvenNumbers(array));`} />
            <p>Output:</p>
            <JSView value={`[1, 3, 5]`} />
        </div>
    }
    starterCode={
        `function filterEvenNumbers(array){
  // TODO: implement
}`
    }
    beforeExercise={
        `let array = [1, 2, 3, 4, 5];
`
    }
    afterExercise={
        `
console.log(filterEvenNumbers(array));
        `
    }
    submitTests={(code) => {
        const filterEvenNumbers = eval(`(function() {
            ${code}
            return filterEvenNumbers;
        })()`);

        let array = [1, 2, 3, 4, 5];
        let filtered = [1, 3, 5];

        let res = filterEvenNumbers(array);
        if (JSON.stringify(res) != JSON.stringify(filtered)) return {
            input: array,
            output: res,
            correct: filtered
        }

        array = [2, 4, 6, 8, 10];
        filtered = [];

        res = filterEvenNumbers(array);
        if (JSON.stringify(res) != JSON.stringify(filtered)) return {
            input: array,
            output: res,
            correct: filtered
        }

        return {success: true};

    }}
/>

export default FilterEvenNumbers;