import Exercise from '../Exercise';
import JSView from '../JSView';

const CreatePerson = () => <Exercise
    name="Create Person"
    description="In this exercise, you are required to write a function createPerson(name, age) that takes a name and an age as arguments and returns an object representing a person with those properties."
    instructions={<ol>
        <li>Create a function named createPerson that takes a name and an age as arguments.</li>
        <li>Create an object with properties name and age, using the arguments provided.</li>
        <li>Return the object.</li>
    </ol>}
    examples={
        <div>
            <h3>Example:</h3>
            <p>Input:</p>
            <JSView value={`console.log(createPerson("John Doe", 30));`} />
            <p>Output:</p>
            <JSView value={`{name: "John Doe", age: 30}`} />
        </div>
    }
    starterCode={
        `function createPerson(name, age){
  // TODO: implement
}`
    }
    beforeExercise={
        `let name = "John Doe";
let age = 30;
`
    }
    afterExercise={
        `
console.log(createPerson(name, age));
        `
    }
    submitTests={(code) => {
        const createPerson = eval(`(function() {
            ${code}
            return createPerson;
        })()`);

        let name = "John Doe";
        let age = 30;
        let person = {name: "John Doe", age: 30};

        let res = createPerson(name, age);
        if (JSON.stringify(res) != JSON.stringify(person)) return {
            input: {name, age},
            output: res,
            correct: person
        }

        name = "Jane Doe";
        age = 25;
        person = {name: "Jane Doe", age: 25};

        res = createPerson(name, age);
        if (JSON.stringify(res) != JSON.stringify(person)) return {
            input: {name, age},
            output: res,
            correct: person
        }

        return {success: true};

    }}
/>

export default CreatePerson;