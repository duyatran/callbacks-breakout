# Lighthouse Labs | Callbacks Breakout

* [ ] Review
* [ ] Examples

## Review

Let's start by defining a callback. What is it, and what is it for? What is a common use case for a callback?

A **callback** is a function that we pass into another function. Let's explore a few important points to help us with this idea.

Recall that functions can be stored in variables and even passed as arguments. It is important to note the distinction between referencing a function and invoking a function. Observe the difference in the two following `console.log` outputs:

```JavaScript
const helloWorldFunction = () => {
  return 'Hello, World!';
};

// Outputs: helloWorldFunction: [Function: helloWorldFunction]
console.log('helloWorldFunction:', helloWorldFunction);

// Outputs: helloWorldFunction(): Hello, World!
console.log('helloWorldFunction():', helloWorldFunction());
```

See how in the first console log, we are passing the function itself into the `console.log`, instead of running the function? In the second `console.log`, the `helloWorldFunction` has parenthesis, and is therefore invoked; this means that it runs and only its *return value* is passed into the `log` method... in this case, the string: 'Hello, World!'

Now, we wouldn't necessarily refer to this example as a use of a callback. This is because in both `console.log`s above, the function is not being run within the `log` method. We've either run our function and passed the value in, or passed it in and it was not actually run.

For a better example of a callback in action, we can write our very own **higher-order function**. A higher-order function is a function that has at least one of the following qualities:

* Accepts a function as an argument
* Returns a function as its result

Let's write a regular plain old function and a higher-order function. We'll see about passing our regular function into the higher-order function; this would be a great example of a callback in action!

```JavaScript
const alphabet = () => {
  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
};

const higherOrderFunction = (callbackFunction) => {
  console.log('higherOrderFunction has begun running.');

  console.log('Running callback...');


  const callbackResult = callbackFunction();
  console.log('callbackResult:', callbackResult);

  console.log('Callback has been run.');

  console.log('higherOrderFunction has finished running.');
};

// Let's try passing a callback into our higher-order function!
higherOrderFunction(alphabet);

// We can even pass in anonymous functions!
higherOrderFunction(() => {
  return 'Howdy! This is string is in an anonymous function.';
});
```

In many cases, when we're writing a function to pass in as a callback to be run later, we'll see the use of anonymous functions. This is a popular approach for a few reasons:

* Naming things is hard, so why bother if we don't have to?
* If this function is only going to be used in this one place, this keeps it organized with where it is used

By nature, callbacks are essentially a function we pass into something with the intention that it may run at a later time in the code / the function we've passed it into. This makes them a fantastic candidate for use in asynchronous programming. We can pass a function as an argument into a function containing instructions that may take a known or unknown time, allowing for those instructions to complete before our function is ultimately run. There are some very core functions available in both Node.js and browser implementations of JavaScript that work in exactly this way. Let's have a look at `setTimout`:

```JavaScript
const sayHello = (name = 'World') => {
  console.log(`Hello, ${name}!`);
};

setTimeout(sayHello, 2000); // Say hello after 2 seconds.

setTimeout(() => {
  sayHello('from an anonymous callback function');
}, 5000); // Say hello after 5 seconds.
```

Don't forget that many methods in JavaScript make use of callbacks. For example, consider a few different ways that you might loop through an array. There is a C-style `for` loop, a `for...of` loop, but there is also the `Array.foreach` method. This method takes in a callback function as an argument. Your function will be run against each item in the array, observe:

```JavaScript
const numberArray = [2, 4, 6, 8, 10, 12];

numberArray.forEach((num, index) => {
  console.log(`Number at index ${index} is: ${num}`);
});
```

Now that we've refreshed ourselves as to what callbacks are and how they work, let's shift our focus to examples more closely related to your current topic of study: front-end JavaScript.

## Examples

It is important to note that certain functions, modules, and features may be exclusive to one of Node.js or the web browser. For example, `process.argv` is available in Node.js, but not the browser. An example of the reverse at play would be `document` is available in the browser, but not in Node.js. Keep this top-of-mind when writing JavaScript, as where you run your code will affect what sort of functionality will be at your finger-tips. Certain jobs are best suited to one or the other of front-end (browser) or back-end (Node.js) JavaScript.

With this in mind, let's create a simple HTML web page that we can practice some more callbacks in:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Callbacks</title>
  </head>
  <body>
    <h1>Callbacks</h1>
  </body>
</html>
```

Alright, so far so good. Open this in the browser and you'll find it displays the desired text so far. Let's attach some JavaScript to this web page using the `<script>` element. We'll include the `defer` attribute to ensure that the web page content loads before our script runs; without this, if we try to access elements in the page, they won't be found.

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Callbacks</title>

    <!-- Our JavaScript: -->
    <script src="./scripts/callbacks.js" defer></script>
  </head>
  <body>
    <h1>Callbacks</h1>
  </body>
</html>
```

Pay close attention to the value you enter into the `src` attribute, as it must match an actual path to your JavaScript file. In the above case, we went with a *relative* path. Let's now open up our `scripts/callbacks.js` file and ensure it is running in our web page properly, enter:

```JavaScript
// Remember, this code is meant to run in the web browser!
// Open your HTML file in a web browser, and check your web dev tools console in the browser.
console.log('Hello, World!'); // You should see this text in your web browser's console: 'Hello, World!'
```

If we see the logged text, we know we did it correctly! If you don't, double check the script element and ensure the correct file path was used.

Alright, so a `console.log` is great to confirm things are working in our page, let's try something more interesting.

### Addition Button

In our HTML, let's add a button:

```HTML
<button id="addition-button">
  Click here to see the result of: 567 + 34
</button>
```

In our JavaScript file, let's make it do something!

```JavaScript
// First, select the element using JS.
const additionButton = document.querySelector('#addition-button'); // Make sure the selector matches the ID in the HTML.

// Confirm that the addition button was selected; it will come out as `null` if it cannot be found.
// If null, make sure you have 'defer' in your script tag.
// Still null? Make sure your querySelector string is correct.
console.log('additionButton:', additionButton);

// Alright, our button said the button should show the result of 567 + 34.
// Let's make that happen! Let's write a function that will show that result.
function additionButtonFunction() {
  const answer = 567 + 34;
  console.log('567 + 34 =', answer); // Expected: 601
  additionButton.textContent = answer; // Replace button text with the calculated sum.
}

// We need to consider when we want this function to run.
// As this was a button element, we probably only want to run it when the element is clicked.
// For cases like this we set up an event listener via the <element>.addEventListener() method.
// This method takes two arguments:
//    1. A string containing the name of the event
//    2. A callback function that will run if and when the event occurs on the target element
additionButton.addEventListener('click', additionButtonFunction); // Run the additionButtonFunction when the additionButton is clicked.
```

### Seconds Counter Button

Let's add a new button to our HTML:

```HTML
<button id="seconds-counter">
  Click here to start counting seconds.
</button>
```

Let's target the button in our JavaScript, and get it to display the seconds passed since it was clicked:

```JavaScript
const secondsCounterButton = document.querySelector('#seconds-counter');
console.log('secondsCounterButton:', secondsCounterButton);

secondsCounterButton.addEventListener('click', function() {
  // Disallow subsequent click events.
  secondsCounterButton.setAttribute('disabled', true);

  let secondsCounted = 0;

  // Recall that setInterval takes 2 arguments:
  //   1. A callback function that will run each time the designated number of milliseconds have passed.
  //   2. The number of milliseconds that should pass before running the callback function.
  setInterval(function() {
    secondsCounted++;
    secondsCountedButton.textContent = `${secondsCounted} seconds have passed.`;
  }, 1000);
});
```

Because we decided to set a disabled attribute the first time this element is clicked, we won't have to worry about multiple intervals overlapping, as this button can only be clicked once. If you do not disable the button on first click, consider using `clearInterval` to avoid creation of multiple intervals. We'll explore this in our next example.

### Timer

Time to throw yet another button into our HTML:

```HTML
<button id="timer-button">
  Click to start timer.
</button>
```

Our goal here is to swap out the text in the button to read: `00:00`, and have it tick up by 1 per second. Once it reaches 60 seconds, we'll have it read `01:00` and so on. Let's give it a shot:

```JavaScript
const timerButton = document.querySelector('#timer-button');
console.log('timerButton:', timerButton);

// We'll use this variable to keep track of our interval.
let timerInterval = null;

timerButton.addEventListener('click', () => {
  timerButton.textContent = '00:00'; // Default output on-click.

  // If there is already an interval running, clear it.
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  let timeElapsed = 0;

  // Keep track of new interval.
  timerInterval = setInterval(() => {
    timeElapsed++;

    let minutes = Math.floor(timeElapsed / 60);
    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    let seconds = Math.floor(timeElapsed % 60);
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    timerButton.textContent = `${minutes}:${seconds}`;
  }, 1000);
});
```

Now each time the button is clicked, its interval is cleared and it will begin counting up from `00:00` once more!
