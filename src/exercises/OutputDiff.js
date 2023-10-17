import CodeMirrorMerge from 'react-codemirror-merge';
import { EditorView } from 'codemirror';
import { EditorState } from '@codemirror/state';

const Original = CodeMirrorMerge.Original;
const Modified = CodeMirrorMerge.Modified;
let doc = `one
two
three
four
five`;

export const Example = (props) => {
  return (
    <CodeMirrorMerge>
      <Original
        value={props.output}
        extensions={[EditorView.editable.of(false), EditorState.readOnly.of(true)]}
      />
      <Modified
        displayName="Correct"
        value={props.correct}
        extensions={[EditorView.editable.of(false), EditorState.readOnly.of(true)]}
      />
    </CodeMirrorMerge>
  );
};

export default Example;