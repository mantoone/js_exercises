import Exercise from '../Exercise';
import JSView from '../JSView';

const RemoveItemFromArrayInObject = () => <Exercise
    name="Remove Items From Array In Object"
    description="In this exercise, you are required to write a function removeItems(obj, key, itemToRemove) that takes an object, a key, and an item to remove. The function should remove the item from the array located at the given key in the object."
    instructions={<ol>
        <li>Create a function named removeItems that takes an object, a key, and an item to remove as arguments.</li>
        <li>Use the filter method to create a new array that does not include the item to remove.</li>
        <li>Use the spread operator to create a new object with the updated array.</li>
        <li>Return the new object.</li>
    </ol>}
    examples={
        <div>
            <h3>Example:</h3>
            <p>Input:</p>
            <JSView value={`let chores = {
    cleaning: ["vacuuming", "dusting", "floor washing", "taking out trash", "bathroom cleaning", "window washing", "ironing", "cleaning cat litter box"],
    cooking: ["cooking", "baking", "grocery shopping", "meal planning"],
    childcare: ["childcare", "driving children", "feeding children", "playing with children", "outdoor activities with children"],
    petcare: ["pet care", "feeding pets", "walking pets", "training pets", "washing pets"],
    yardwork: ["raking the yard", "watering the yard", "mowing the yard", "fertilizing the yard", "cleaning the yard", "snow work in the yard", "sanding the yard", "renovating the yard"],
    others: ["other chores", "home organization", "home cleaning", "home renovation", "home repair", "home remodeling", "home painting", "home wallpapering", "home decorating", "home furnishing", "assembly of home items", "disassembly of home items", "packing of home items", "moving of home items", "cleaning of home items", "organization of home items", "carrying of home items", "lifting of home items"],
};
console.log(removeItems(chores, 'cleaning', 'vacuuming'));`} />
            <p>Output:</p>
            <JSView value={`{
    cleaning: ["dusting", "floor washing", "taking out trash", "bathroom cleaning", "window washing", "ironing", "cleaning cat litter box"],
    cooking: ["cooking", "baking", "grocery shopping", "meal planning"],
    childcare: ["childcare", "driving children", "feeding children", "playing with children", "outdoor activities with children"],
    petcare: ["pet care", "feeding pets", "walking pets", "training pets", "washing pets"],
    yardwork: ["raking the yard", "watering the yard", "mowing the yard", "fertilizing the yard", "cleaning the yard", "snow work in the yard", "sanding the yard", "renovating the yard"],
    others: ["other chores", "home organization", "home cleaning", "home renovation", "home repair", "home remodeling", "home painting", "home wallpapering", "home decorating", "home furnishing", "assembly of home items", "disassembly of home items", "packing of home items", "moving of home items", "cleaning of home items", "organization of home items", "carrying of home items", "lifting of home items"],
}`} />
        </div>
    }
    starterCode={
        `function removeItems(obj, key, itemToRemove){
  // TODO: implement
}`
    }
    beforeExercise={
        `let chores = {
    cleaning: ["vacuuming", "dusting", "floor washing", "taking out trash", "bathroom cleaning", "window washing", "ironing", "cleaning cat litter box"],
    cooking: ["cooking", "baking", "grocery shopping", "meal planning"],
    childcare: ["childcare", "driving children", "feeding children", "playing with children", "outdoor activities with children"],
    petcare: ["pet care", "feeding pets", "walking pets", "training pets", "washing pets"],
    yardwork: ["raking the yard", "watering the yard", "mowing the yard", "fertilizing the yard", "cleaning the yard", "snow work in the yard", "sanding the yard", "renovating the yard"],
    others: ["other chores", "home organization", "home cleaning", "home renovation", "home repair", "home remodeling", "home painting", "home wallpapering", "home decorating", "home furnishing", "assembly of home items", "disassembly of home items", "packing of home items", "moving of home items", "cleaning of home items", "organization of home items", "carrying of home items", "lifting of home items"],
};
`
    }
    afterExercise={
        `
console.log(removeItems(chores, 'cleaning', 'vacuuming'));
        `
    }
    submitTests={(code) => {
        const removeItems = eval(`(function() {
            ${code}
            return removeItems;
        })()`);

        let chores = {
            cleaning: ["vacuuming", "dusting", "floor washing", "taking out trash", "bathroom cleaning", "window washing", "ironing", "cleaning cat litter box"],
            cooking: ["cooking", "baking", "grocery shopping", "meal planning"],
            childcare: ["childcare", "driving children", "feeding children", "playing with children", "outdoor activities with children"],
            petcare: ["pet care", "feeding pets", "walking pets", "training pets", "washing pets"],
            yardwork: ["raking the yard", "watering the yard", "mowing the yard", "fertilizing the yard", "cleaning the yard", "snow work in the yard", "sanding the yard", "renovating the yard"],
            others: ["other chores", "home organization", "home cleaning", "home renovation", "home repair", "home remodeling", "home painting", "home wallpapering", "home decorating", "home furnishing", "assembly of home items", "disassembly of home items", "packing of home items", "moving of home items", "cleaning of home items", "organization of home items", "carrying of home items", "lifting of home items"],
        };

        let updatedChores = removeItems(chores, 'cleaning', 'vacuuming');
        if (updatedChores.cleaning.includes('vacuuming')) return {
            input: chores,
            output: updatedChores,
            correct: 'The item "vacuuming" should be removed from the "cleaning" array.'
        }

        return {success: true};

    }}
/>

export default RemoveItemFromArrayInObject;