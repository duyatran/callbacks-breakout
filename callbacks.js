const additionButton = document.querySelector('#addition-button');
console.log(additionButton);

function additionButtonFn() {
  const answer = 135 + 32;
  console.log('135 + 32 = ', answer);
  additionButton.textContent = answer;
}

additionButton.addEventListener('click', additionButtonFn);