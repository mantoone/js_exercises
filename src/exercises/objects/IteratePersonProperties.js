import Exercise from '../Exercise';
import JSView from '../JSView';

const IteratePersonProperties = () => <Exercise
    name="Iterate Person Properties"
    description="In this exercise, you are required to write a function iteratePersonProperties(person) that takes a person object as an argument and prints each property name and value."
    instructions={<ol>
        <li>Create a function named iteratePersonProperties that takes a person object as an argument.</li>
        <li>Iterate over the properties of the person object.</li>
        <li>For each property, print the property name and value in the format 'property: value'.</li>
    </ol>}
    examples={
        <div>
            <h3>Example:</h3>
            <p>Input:</p>
            <JSView value={`let person = {name: "John Doe", age: 30};
iteratePersonProperties(person);`} />
            <p>Output:</p>
            <JSView value={`"name: John Doe"
"age: 30"`} />
        </div>
    }
    starterCode={
        `function iteratePersonProperties(person){
  // TODO: implement
}`
    }
    beforeExercise={
        `let person = {name: "John Doe", age: 30};
`
    }
    afterExercise={
        `
iteratePersonProperties(person);
        `
    }
    submitTests={(code) => {
        const iteratePersonProperties = eval(`(function() {
            ${code}
            return iteratePersonProperties;
        })()`);

        let person = {name: "John Doe", age: 30};
        let output = "name: John Doe\nage: 30";

        let res = iteratePersonProperties(person);
        if (res != output) return {
            input: person,
            output: res,
            correct: output
        }

        person = {name: "Jane Doe", age: 25};
        output = "name: Jane Doe\nage: 25";

        res = iteratePersonProperties(person);
        if (res != output) return {
            input: person,
            output: res,
            correct: output
        }

        return {success: true};

    }}
/>

export default IteratePersonProperties;