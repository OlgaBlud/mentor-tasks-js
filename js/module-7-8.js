// Завдання 1

const refs = {
  taskTitle: document.querySelector('.taskTitle'),
  btn: document.querySelector('#alertButton'),
  input: document.querySelector('#alertInput'),
};
// const { taskTitle, btn, input } = refs;
refs.btn.addEventListener('click', onShowMeBtnClick);
function onShowMeBtnClick() {
  if (refs.input.value !== '') {
    refs.taskTitle.textContent = refs.input.value;
  }
}

// Завдання 8_______________________________________________________________________________________________________________

const references = {
  statList: document.querySelector('.statList'),
  resultButton: document.querySelector('#resultButton'),
  resultSection: document.querySelector('#resultSection'),
};

let sum = 0;
let clicksStat = {};
references.statList.addEventListener('click', onCalcBtnClick);
function onCalcBtnClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  sum += Number(event.target.dataset.number);
  //   sum += +event.target.dataset.number;

  clicksStat[event.target.textContent] =
    (clicksStat[event.target.textContent] || 0) + 1;
}
references.resultButton.addEventListener('click', onResultBtnClick);
function onResultBtnClick() {
  console.log(sum);
  console.log(clicksStat);
}

// Завдання 9_______________________________________________________________________________________________________________

const checkboxForm = document.querySelector('.checkboxForm');
const checkboxList = document.querySelector('.checkboxList');
const checkboxContent = checkboxList.innerHTML;
const resetBtn = document.querySelector('.resetBtn');

let arrOfCheckedInputs = [];

checkboxForm.addEventListener('change', handleOnInputsClick);

function handleOnInputsClick(event) {
  if (event.target.nodeName !== 'INPUT') {
    return;
  } else if (!arrOfCheckedInputs.includes(event.target.id)) {
    arrOfCheckedInputs.push(event.target.id);
  } else {
    const indexToRemove = arrOfCheckedInputs.indexOf(event.target.id);
    arrOfCheckedInputs.splice(indexToRemove, 1);
  }
}

checkboxForm.addEventListener('click', handleOnFilterBtnClick);
function handleOnFilterBtnClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  event.preventDefault();

  arrOfCheckedInputs.forEach(inputId => {
    document.querySelector(`#${inputId}`).parentElement.remove();
  });
  arrOfCheckedInputs = [];
}
resetBtn.addEventListener('click', () => {
  checkboxList.innerHTML = checkboxContent;
});

// Завдання 2_______________________________________________________________________________________________________________

const swapBtn = document.querySelector('#swapButton');
const leftInput = document.querySelector('#leftSwapInput');
const rightInput = document.querySelector('#rightSwapInput');
swapBtn.addEventListener('click', onSwapBtnClick);
function onSwapBtnClick() {
  const leftInputValue = leftInput.value;
  const rightInputValue = rightInput.value;
  rightInput.value = leftInputValue;
  leftInput.value = rightInputValue;
}

// Завдання 10_______________________________________________________________________________________________________________

const sortByLastNameBtn = document.querySelector('#sortByLastNameButton');
const sortByNameBtn = document.querySelector('#sortByNameButton');
const peopleList = document.querySelector('.people');
sortByLastNameBtn.addEventListener('click', handleSortByLastNameBtn);
sortByNameBtn.addEventListener('click', handleSortByNameBtn);

const personsNamesArr = [];
document
  .querySelectorAll('.person')
  .forEach(person => personsNamesArr.push(person.innerText));

const reversedPersonsNamesArr = personsNamesArr.map(person =>
  person.split(' ').reverse().join(' ')
);

function handleSortByLastNameBtn() {
  const sortedByLastNameArr = sortArr(reversedPersonsNamesArr);
  peopleList.innerHTML = generateSortedPersonsList(sortedByLastNameArr);
}
function handleSortByNameBtn() {
  const sortedByNameArr = sortArr(personsNamesArr);
  peopleList.innerHTML = generateSortedPersonsList(sortedByNameArr);
}

function sortArr(arr) {
  return arr.toSorted((str1, str2) => str1.localeCompare(str2));
}
function generateSortedPersonsList(arr) {
  return arr.map(name => `<li class="person">${name}</li>`).join('');
}
