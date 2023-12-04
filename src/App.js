import React from 'react';
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
              <li><a href="#remove-items-from-array-in-object">Remove items from array in object</a></li>
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
