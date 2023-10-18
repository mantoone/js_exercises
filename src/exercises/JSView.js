import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { lineNumbers } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';

const JSView = (props) => <div className="jsview"><CodeMirror
    value={props.value}
    extensions={[
        javascript({ jsx: true }),
        lineNumbers({
          formatNumber: n => n + (props.startNumber || 0)
        })
    ]}
    editable={false}
    basicSetup={{
        highlightActiveLine: false
    }}
    /></div>

export default JSView;