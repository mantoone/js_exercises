import Exercise from '../Exercise';
import JSView from '../JSView';

const GetPersonProperty = () => <Exercise
    name="Get Person Property"
    description="In this exercise, you are required to write a function getPersonProperty(person, property) that takes a person object and a property name as arguments and returns the value of the specified property."
    instructions={<ol>
        <li>Create a function named getPersonProperty that takes a person object and a property name as arguments.</li>
        <li>Retrieve the value of the specified property from the person object.</li>
        <li>Return the value.</li>
    </ol>}
    examples={
        <div>
            <h3>Example:</h3>
            <p>Input:</p>
            <JSView value={`let person = {name: "John Doe", age: 30};
console.log(getPersonProperty(person, "name"));`} />
            <p>Output:</p>
            <JSView value={`"John Doe"`} />
        </div>
    }
    starterCode={
        `function getPersonProperty(person, property){
  // TODO: implement
}`
    }
    beforeExercise={
        `let person = {name: "John Doe", age: 30};
let property = "name";
`
    }
    afterExercise={
        `
console.log(getPersonProperty(person, property));
        `
    }
    submitTests={(code) => {
        const getPersonProperty = eval(`(function() {
            ${code}
            return getPersonProperty;
        })()`);

        let person = {name: "John Doe", age: 30};
        let property = "name";
        let value = "John Doe";

        let res = getPersonProperty(person, property);
        if (res != value) return {
            input: {person, property},
            output: res,
            correct: value
        }

        property = "age";
        value = 30;

        res = getPersonProperty(person, property);
        if (res != value) return {
            input: {person, property},
            output: res,
            correct: value
        }

        return {success: true};

    }}
/>

export default GetPersonProperty;