import Exercise from '../Exercise';
import JSView from '../JSView';

const CreatePersonWithGreet = () => <Exercise
    name="Create Person with Greet Method"
    description="In this exercise, you are required to write a function createPerson(name, age) that takes a name and an age as arguments and returns an object representing a person with those properties and a method greet that returns a greeting."
    instructions={<ol>
        <li>Create a function named createPerson that takes a name and an age as arguments.</li>
        <li>Create an object with properties name and age, using the arguments provided.</li>
        <li>Add a method greet to the object that returns a string in the format 'Hello, my name is {"{name}"} and I am {"{age}"} years old.'</li>
        <li>Return the object.</li>
    </ol>}
    examples={
        <div>
            <h3>Example:</h3>
            <p>Input:</p>
            <JSView value={`let person = createPerson("John Doe", 30);
console.log(person.greet());`} />
            <p>Output:</p>
            <JSView value={`"Hello, my name is John Doe and I am 30 years old."`} />
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
let person = createPerson(name, age);
console.log(person.greet());
        `
    }
    submitTests={(code) => {
        const createPerson = eval(`(function() {
            ${code}
            return createPerson;
        })()`);

        let name = "John Doe";
        let age = 30;
        let greeting = "Hello, my name is John Doe and I am 30 years old.";

        let person = createPerson(name, age);
        let res = person.greet();
        if (res != greeting) return {
            input: {name, age},
            output: res,
            correct: greeting
        }

        name = "Jane Doe";
        age = 25;
        greeting = "Hello, my name is Jane Doe and I am 25 years old.";

        person = createPerson(name, age);
        res = person.greet();
        if (res != greeting) return {
            input: {name, age},
            output: res,
            correct: greeting
        }

        return {success: true};

    }}
/>

export default CreatePersonWithGreet;