//import brain from "brain.js"
import { trainData } from './dataset';
import { NeuralNetwork } from 'brain.js/dist/brain-browser.mjs'
import { shuffle } from './shuffle';

//import brain from "brain.js"
const brain = require("brain.js");

// input: [age in years, state lat, state long]

// let testData = [
//   {input: [30, 46.392410, -94.636230], output: [1,0,0,0,0,0,0,0]}, //MN
//   {input: [40, 41.599998, -72.699997], output: [0,0,0,1,0,0,0,0]}, //CT
//   {input: [20, 34.048927, -111.093735], output: [0,0,0,0,1,0,0,0]}, //AZ
//   {input: [73, 27.994402, -81.760254], output: [0,0,0,0,0,0,0,1]}, //FL
// ]

  const net = new NeuralNetwork(
     {
  //   log: true
  //   activation: 'sigmoid', // activation function
  //   hiddenLayers: [2],
  //   iterations: 20000,
  //   learningRate: 0.5 // global learning rate, useful when training using streams
   }
  );
  
  //net.train(shuffle(trainData));
  net.train( [ 
    {input: [30, 41.500000, -100.000000], output: [1,0,0,0,0,0,0,0]}, //NE
    {input: [20, 38.573936, -92.603760], output: [1,0,0,0,0,0,0,0]}, //MO
    {input: [45, 38.500000, -98.000000], output: [0,1,0,0,0,0,0,0]}, //KS
    {input: [60, 39.113000, -105.358887], output: [0,1,0,0,0,0,0,0]}, //CO
    {input: [32, 41.500000, -100.000000], output: [1,0,0,0,0,0,0,0]}, //NE
    {input: [25, 38.573936, -92.603760], output: [1,0,0,0,0,0,0,0]}, //MO
    {input: [55, 38.500000, -98.000000], output: [0,1,0,0,0,0,0,0]}, //KS
    {input: [70, 39.113000, -105.358887], output: [0,1,0,0,0,0,0,0]}, //CO
    {input: [33, 41.500000, -100.000000], output: [1,0,0,0,0,0,0,0]}, //NE
    {input: [26, 38.573936, -92.603760], output: [1,0,0,0,0,0,0,0]}, //MO
    {input: [65, 38.500000, -98.000000], output: [0,1,0,0,0,0,0,0]}, //KS
    {input: [80, 39.113000, -105.358887], output: [0,1,0,0,0,0,0,0]}, //CO
    {input: [18, 41.500000, -100.000000], output: [1,0,0,0,0,0,0,0]}, //NE
    //{input: [19, 38.573936, -92.603760], output: [1,0,0,0,0,0,0,0]}, //MO
    {input: [50, 38.500000, -98.000000], output: [0,1,0,0,0,0,0,0]}, //KS
    {input: [88, 39.113000, -105.358887], output: [0,1,0,0,0,0,0,0]}, //CO
 
    
  
    {input: [18, 42.407211, -71.382439], output: [0,0,1,0,0,0,0,0]}, //MA
    {input: [25, 37.926868, -78.024902], output: [0,0,1,0,0,0,0,0]}, //VA
    {input: [40, 45.367584, -68.972168], output: [0,0,0,1,0,0,0,0]}, //ME
    {input: [70, 44.000000, -71.500000], output: [0,0,0,1,0,0,0,0]}, //NH
  
    {input: [32, 36.778259, -119.417931], output: [0,0,0,0,1,0,0,0]}, //CA
    {input: [55, 44.000000, -120.500000], output: [0,0,0,0,0,1,0,0]}, //OR
    {input: [26, 47.751076, -120.740135], output: [0,0,0,0,1,0,0,0]}, //WA
    {input: [67, 39.419220, -111.950684], output: [0,0,0,0,0,1,0,0]}, //UT
  
    {input: [28, 34.307144, -106.018066], output: [0,0,0,0,0,0,1,0]}, //NM
    {input: [48, 31.000000, -100.000000], output: [0,0,0,0,0,0,0,1]}, //TX
    {input: [19, 33.247875, -83.441162], output: [0,0,0,0,0,0,1,0]}, //GA
    {input: [73, 34.799999, -92.199997], output: [0,0,0,0,0,0,0,1]}, //AR
  ]
    )

  // const output = net.run([73, 27.994402, -81.760254])  
  // console.log('output: ', output) //[0,0,0,0,0,0,0,1]

  export const reco = (arr) => {
    return net.run(arr);
  }

   export default brain;
