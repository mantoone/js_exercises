import React from 'react';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { gutter, lineNumbers } from '@codemirror/view';
import JSView from './JSView';



// React function for an exercise component
const Exercise = (props) => {
  const [value, setValue] = React.useState(props.starterCode);
  const [output, setOutput] = React.useState("");
  const [errors, setErrors] = React.useState("");
  const refs = React.useRef({});

  const beforeLines = React.useMemo(() => props.beforeExercise.split('\n').length, [props.beforeExercise]);
  const afterLines = React.useMemo(() => props.afterExercise.split('\n').length, [props.afterExercise]);
  const codeLines = React.useMemo(() => value.split('\n').length, [value]);

  React.useEffect(() => {
    if (refs.current?.view) console.log('EditorView:', refs.current?.view);
    if (refs.current?.state) console.log('EditorState:', refs.current?.state);
    if (refs.current?.editor) console.log('HTMLDivElement:', refs.current?.editor);
  }, [refs.current]);

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
    checkErrors(() => {
      let code = props.beforeExercise + value + props.afterExercise;
      let out = "";
      const addOutput = (text) => out += JSON.stringify(text) + '\n';
      code = code.replace(/console.log/g, 'addOutput');
      console.log('code:', code);
      eval(code);

      setOutput(out);
    });
  }, [value]);

  const onSubmit = React.useCallback(() => {
    checkErrors(() => {
      console.log('submit result', props.submitTests(value));
    });
  }, [value]);

  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <div>{props.instructions}</div>
      <div style={{marginBottom: '20px'}}>{props.examples}</div>
      <p><b>Exercise</b></p>
      <JSView value={props.beforeExercise} />
      <CodeMirror
      ref={refs}
      value={value}
      extensions={[
        javascript({ jsx: true }),
        gutter({
          lineMarker(view, line) {
            return line.from == line.to ? <p></p> : null
          },
          initialSpacer: () => <p></p>
        }),
        lineNumbers({
          formatNumber: n => (n+beforeLines)
        })
      ]}
      onChange={onChange}
      />
      <JSView value={props.afterExercise} startNumber={codeLines + beforeLines} />
      {output ? <pre>{output}</pre> : null}
      {errors ? <pre>{errors}</pre> : null}
      <div style={{marginTop: '10px'}}>
        <button style={{marginRight: '10px'}} onClick={onRun}>Run</button>
        <button className='submit' onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Exercise;