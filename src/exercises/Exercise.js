import React from 'react';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { gutter, lineNumbers } from '@codemirror/view';
import JSView from './JSView';
import OutputDiff from './OutputDiff';



// React function for an exercise component
const Exercise = (props) => {
  const [value, setValue] = React.useState(props.starterCode);
  const [output, setOutput] = React.useState("");
  const [errors, setErrors] = React.useState("");
  const [submitResult, setSubmitResult] = React.useState();
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
      let code = props.beforeExercise + '\n' + value + '\n' + props.afterExercise;
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
      setSubmitResult({});
      const res = props.submitTests(value);
      console.log('submit result', res);
      setSubmitResult(res);
    });
  }, [value]);

  const id = React.useMemo(() => props.name.replace(/\s/g, '-').toLowerCase(), [props.name]);

  return (
    <div className="exercise" id={id}>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <div>{props.instructions}</div>
      <div style={{marginBottom: '20px'}}>{props.examples}</div>
      <h3><b>Exercise</b></h3>
      <div className="editor">
        <div className="before">
          <JSView value={props.beforeExercise} />
        </div>
        <div className="code">
          <CodeMirror
            ref={refs}
            value={value}
            extensions={[
              javascript({ jsx: true }),
              lineNumbers({
                formatNumber: n => (n + beforeLines)
              })
            ]}
            onChange={onChange}
          />
        </div>
        <div className="after">
          <JSView value={props.afterExercise} startNumber={codeLines + beforeLines} />
        </div>
      </div>
      <div style={{marginTop: '10px'}}>
        <button style={{marginRight: '10px'}} onClick={onRun}>Run</button>
        <button className='submit' onClick={onSubmit}>Submit</button>
      </div>

      <p><b>Output</b></p>
      {output ? <div style={{ width: '100%' }}>
        <pre className='codeOutput'>{output}</pre>
      </div> : null}
      {errors ? <pre>{errors}</pre> : null}

      <h4>Submit results</h4>
      {submitResult ?
        <div>
          {
            submitResult.success ? <p>🎉All correct!🎉 Well done!</p> :
              <div>
                <p>Your function gives incorrect output for </p>
                <pre>{JSON.stringify(submitResult.input)}</pre>
                <p>Your function output is on the left, correct output on the right</p>
                <OutputDiff
                  output={JSON.stringify(submitResult.output, null, 2)}
                  correct={JSON.stringify(submitResult.correct, null, 2)}
                />
              </div>
          }
        </div>
        : 'Please submit your code'}
    </div>
  );
}

export default Exercise;