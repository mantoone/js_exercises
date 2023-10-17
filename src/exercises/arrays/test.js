const code = `
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function transpose(matrix){
    // TODO: implement
    if(matrix[0] > matrix[1]) return 2;
    else return 3;
}

console.log(transpose(matrix));
`;

const functionRegex = /function transpose\([^)]*\)\s*\{[^}]*\}/;
const match = code.match(functionRegex);

if (match) {
  const transposeFunctionCode = match[0];
  console.log(transposeFunctionCode);
} else {
  console.log('No match found');
}

// Create a new worker
const worker = new Worker(URL.createObjectURL(new Blob([`
  self.onmessage = function(event) {
    eval(event.data);
  };
`], { type: 'text/javascript' })));

// Send the code to the worker
worker.postMessage(code);

// Listen for messages from the worker
worker.onmessage = function(event) {
  console.log(event.data);
};

// Listen for errors from the worker
worker.onerror = function(error) {
  console.error(error);
};