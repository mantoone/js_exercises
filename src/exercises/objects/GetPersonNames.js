import Exercise from '../Exercise';
import JSView from '../JSView';

const GetPersonNames = () => <Exercise
    name="Get Person Names"
    description="In this exercise, you are required to write a function getPersonNames(people) that takes an array of person objects and returns an array of the persons' names."
    instructions={<ol>
        <li>Create a function named getPersonNames that takes an array of person objects as an argument.</li>
        <li>Loop through the array of person objects.</li>
        <li>For each person object, get the name property and add it to a new array.</li>
        <li>Return the new array of names.</li>
    </ol>}
    examples={
        <div>
            <h3>Example:</h3>
            <p>Input:</p>
            <JSView value={`let people = [{name: "John Doe", age: 30}, {name: "Jane Doe", age: 25}, {name: "Jim Doe", age: 35}];
console.log(getPersonNames(people));`} />
            <p>Output:</p>
            <JSView value={`["John Doe", "Jane Doe", "Jim Doe"]`} />
        </div>
    }
    starterCode={
        `function getPersonNames(people){
  // TODO: implement
}`
    }
    beforeExercise={
        `let people = [{name: "John Doe", age: 30}, {name: "Jane Doe", age: 25}, {name: "Jim Doe", age: 35}];
`
    }
    afterExercise={
        `
console.log(getPersonNames(people));
        `
    }
    submitTests={(code) => {
        const getPersonNames = eval(`(function() {
            ${code}
            return getPersonNames;
        })()`);

        let people = [{name: "John Doe", age: 30}, {name: "Jane Doe", age: 25}, {name: "Jim Doe", age: 35}];
        let names = ["John Doe", "Jane Doe", "Jim Doe"];

        let res = getPersonNames(people);
        if (JSON.stringify(res) != JSON.stringify(names)) return {
            input: people,
            output: res,
            correct: names
        }

        people = [{name: "Alice", age: 20}, {name: "Bob", age: 30}, {name: "Charlie", age: 40}];
        names = ["Alice", "Bob", "Charlie"];

        res = getPersonNames(people);
        if (JSON.stringify(res) != JSON.stringify(names)) return {
            input: people,
            output: res,
            correct: names
        }

        return {success: true};

    }}
/>

export default GetPersonNames;