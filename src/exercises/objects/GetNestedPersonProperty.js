import Exercise from '../Exercise';
import JSView from '../JSView';

const GetNestedPersonProperty = () => <Exercise
    name="Get Nested Person Property"
    description="In this exercise, you are required to write a function getNestedPersonProperty(person, property) that takes a nested person object and a property name as arguments and returns the value of the specified property."
    instructions={<ol>
        <li>Create a function named getNestedPersonProperty that takes a nested person object and a property name as arguments.</li>
        <li>Retrieve the value of the specified property from the nested person object.</li>
        <li>Return the value.</li>
    </ol>}
    examples={
        <div>
            <h3>Example:</h3>
            <p>Input:</p>
            <JSView value={`let person = {name: "John Doe", age: 30, address: {city: "New York", country: "USA"}};
console.log(getNestedPersonProperty(person, "address.city"));`} />
            <p>Output:</p>
            <JSView value={`"New York"`} />
        </div>
    }
    starterCode={
        `function getNestedPersonProperty(person, property){
  // TODO: implement
}`
    }
    beforeExercise={
        `let person = {name: "John Doe", age: 30, address: {city: "New York", country: "USA"}};
let property = "address.city";
`
    }
    afterExercise={
        `
console.log(getNestedPersonProperty(person, property));
        `
    }
    submitTests={(code) => {
        const getNestedPersonProperty = eval(`(function() {
            ${code}
            return getNestedPersonProperty;
        })()`);

        let person = {name: "John Doe", age: 30, address: {city: "New York", country: "USA"}};
        let property = "address.city";
        let value = "New York";

        let res = getNestedPersonProperty(person, property);
        if (res != value) return {
            input: {person, property},
            output: res,
            correct: value
        }

        property = "address.country";
        value = "USA";

        res = getNestedPersonProperty(person, property);
        if (res != value) return {
            input: {person, property},
            output: res,
            correct: value
        }

        return {success: true};

    }}
/>

export default GetNestedPersonProperty;