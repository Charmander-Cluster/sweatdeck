//import brain from "brain.js"
import { DATA } from './dataset';
import { NeuralNetwork } from 'brain.js/dist/brain-browser.mjs'

//import brain from "brain.js"
const brain = require("brain.js");

// input: [age in years, state lat, state long]

let testData = [
  {input: [30, 46.392410, -94.636230], output: [1,0,0,0,0,0,0,0]}, //MN
  {input: [40, 41.599998, -72.699997], output: [0,0,0,1,0,0,0,0]}, //CT
  {input: [20, 34.048927, -111.093735], output: [0,0,0,0,1,0,0,0]}, //AZ
  {input: [73, 27.994402, -81.760254], output: [0,0,0,0,0,0,0,1]}, //FL
]

  const net = new NeuralNetwork();
  
  net.train(DATA);

  const output = net.run([73, 27.994402, -81.760254])  
  console.log('output: ', output) //[0,0,0,0,0,0,0,1]

  export const reco = (arr) => {
    return net.run(arr);
  }

   export default brain;