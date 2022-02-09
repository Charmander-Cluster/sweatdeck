let shuffle = function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

const samples = [
  ["2/17/2022", "FL"],
  ["12/3/1990", "AR"],
  ["12/07/1990", "NY"],
  ["2/24/2022", "MA"],
  ["10/25/1990", "NY"],
  ["2/16/2022", "CO"],
  ["10/25/1990", "NY"],
  ["12/2/1300", "NM"],
  ["3/3/2022", "NY"],
  ["1/10/2022", "FL"],
  ["10/25/1990", "NY"],
  ["12/13/2014", "AL"],
  ["2/17/2022", "FL"],
  ["10/25/1990", "NY"],
  ["10/25/1990", "FL"],
  ["10/8/1978", "ME"],
  ["12/09/1942", "MA"],
  ["2000/12/02", "NY"],
  ["10/25/1990", "NY"],
  ["2/10/2022", "CT"],
  ["10/25/1990", "NY"],
  ["10/20/1990", "FL"],
  ["2/25/2022", "CA"],
  ["3/2/2022", "IA"]
];


const labels = [
[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],
[1,0,0],[1,0,0],[1,0,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],
[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1]];

const orderedData = samples.map((sample,index) => {
    return {
        input: sample,
        output: labels[index]
    }
});

const shuffledData = shuffle(orderedData);

exports.DATA = shuffledData;
