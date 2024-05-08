// const helloWorldFunction = () => {
//   return "Hello, world;"
// }

// console.log('helloWorldFunction:', helloWorldFunction);
// console.log('helloWorldFunction():', helloWorldFunction());

// const alphabet = () => {
//   return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// }

// const higherOrderFunction = (callback) => {
//   console.log('higherOrderFunction has begun running.');

//   const callbackResult = callback();
//   console.log('callbackResult:', callbackResult);

//   console.log('higherOrderFunction has finished running.');
// }

// higherOrderFunction(alphabet);

const sayHello = (name = 'World') => {
  console.log(`Hello, ${name}!`);
}

setTimeout(sayHello, 2000); // sayHello in 2 seconds
console.log("here at the end");

