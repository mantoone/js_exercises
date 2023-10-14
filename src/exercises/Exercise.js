import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';


// React function for an exercise component
const Exercise = (props) => {
  const [value, setValue] = React.useState(props.starterCode);
  const [errors, setErrors] = React.useState("");
  const onChange = React.useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);

  const checkErrors = (fun) => {
    try {
      fun();
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
  }

  const onRun = React.useCallback(() => {
    checkErrors(() => eval(value))
  }, [value]);

  const onSubmit = React.useCallback(() => {
    checkErrors(() => {
      props.submitTests(value);
    });
  }, [value]);

  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <div>{props.instructions}</div>
      <div style={{marginBottom: '20px'}}>{props.examples}</div>
      <p><b>Exercise</b></p>
      <CodeMirror value={value} extensions={[javascript({ jsx: true })]} onChange={onChange} />
      {errors ? <pre>{errors}</pre> : null}
      <div style={{marginTop: '10px'}}>
        <button style={{marginRight: '10px'}} onClick={onRun}>Run</button>
        <button className='submit' onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Exercise;