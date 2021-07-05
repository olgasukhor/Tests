const sumAB = (a, b) => a + b;

const sumNumbers = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(sumAB(2,4));
    }, 2000);
  });
  
sumNumbers.then((result) => {
    console.log(result);
    
  });  
//   console.log(sumNumbers);
  