import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import Transpose from './exercises/arrays/Transpose';
import './App.css';
import SumRows from './exercises/arrays/SumRows';
import FindMax from './exercises/arrays/FindMax';
import EvenNumbers from './exercises/arrays/EvenNumbers';
import SquareNumbers from './exercises/arrays/SquareNumbers';

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
      <h1>Javascript exercises</h1>
      {/* <header>
        <nav>
          <ul>
            <li><a href="#">JS</a></li>
            <li><a href="#">Arrays</a></li>
            <li><a href="#">Objects</a></li>
          </ul>
        </nav>
      </header> */}
      <FindMax/>
      <SquareNumbers/>
      <EvenNumbers/>
      <SumRows/>
      <Transpose/>
    </div>
  );
}

export default App;
