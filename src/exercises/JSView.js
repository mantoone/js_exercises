import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const JSView = (props) => <CodeMirror
    value={props.value}
    extensions={[javascript({ jsx: true })]}
    editable={false}
    />

export default JSView;