import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import Transpose from './exercises/arrays/Transpose';
import './App.css';
import SumRows from './exercises/arrays/SumRows';
import FindMax from './exercises/arrays/FindMax';
import EvenNumbers from './exercises/arrays/EvenNumbers';
import SquareNumbers from './exercises/arrays/SquareNumbers';
import CreatePerson from './exercises/objects/CreatePerson';
import CreatePersonWithGreet from './exercises/objects/CreatePersonWithGreet';
import GetPersonProperty from './exercises/objects/GetPersonProperty';
import GetNestedPersonProperty from './exercises/objects/GetNestedPersonProperty';
import GetPersonNames from './exercises/objects/GetPersonNames';
import IteratePersonProperties from './exercises/objects/IteratePersonProperties';
import RemoveItemFromArrayInObject from './exercises/arrays/RemoveItemFromArrayInObject';

function App() {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const [errors, setErrors] = React.useState("");
  const onChange = React.useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);

  const onClick = React.useCallback(() => {
    try {
      eval(value);
      setErrors("");
    } catch (err) {
      console.log('err:', err);
      const matches = err.stack.match(/<anonymous>:(\d+):(\d+)/g);
      let errorString = '';
      if (matches) {
        matches.forEach((match) => {
          const [, line, column] = match.match(/<anonymous>:(\d+):(\d+)/);
          if (errorString){
            errorString += '\tcall from ';
          } else {
            errorString += ' on '
          }
          errorString += `line: ${line}, column: ${column}\n`;
        });
        setErrors(errorString);
      } 
      setErrors(err.toString() + errorString);
    }
  }, [value]);

  return (
    <div className="App">
      <h1 className="pageTitle">Javascript exercises</h1>
      <header>
        <nav>
          <ul>
            <li><a href="#">JS</a></li>
            <li><a href="#array-exercises">Arrays</a></li>
            <li><a href="#object-exercises">Objects</a></li>
          </ul>
        </nav>
      </header>
      <div class="outline">
        <h4>Outline</h4>
        <ul class="indent">
          <li>
            <a href="#array-exercises">Arrays</a>
            <ul class="indent">
              <li><a href="#find-maximum">Find Max</a></li>
              <li><a href="#square-numbers">Square Numbers</a></li>
              <li><a href="#filter-even-numbers">Even Numbers</a></li>
              <li><a href="#sum-rows">Sum Rows</a></li>
              <li><a href="#matrix-transpose">Transpose</a></li>
            </ul>
          </li>
          <li>
            <a href="#object-exercises">Objects</a>
            <ul class="indent">
              <li><a href="#create-person">Create Person</a></li>
              <li><a href="#create-person-with-greet-method">Create Person with Greet</a></li>
              <li><a href="#get-person-property">Get Person Property</a></li>
              <li><a href="#get-nested-person-property">Get Nested Person Property</a></li>
              <li><a href="#get-person-names">Get Person Names</a></li>
              <li><a href="#iterate-person-properties">Iterate Person Properties</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <h2 id="array-exercises">Array exercises</h2>
      <FindMax />
      <SquareNumbers />
      <EvenNumbers />
      <SumRows />
      <Transpose />
      <RemoveItemFromArrayInObject />

      <h2 id='object-exercises'>Object exercises</h2>
      <CreatePerson />
      <CreatePersonWithGreet />
      <GetPersonProperty />
      <GetNestedPersonProperty />
      <GetPersonNames />
      <IteratePersonProperties />
    </div>
  );
}

export default App;
