/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/
/* const refs = {
  taskTitle: document.querySelector('.taskTitle'),
  btn: document.querySelector('#alertButton'),
  input: document.querySelector('#alertInput'),
};
// const { taskTitle, btn, input } = refs;
refs.btn.addEventListener('click', onShowMeBtnClick);
function onShowMeBtnClick() {
  refs.taskTitle.textContent = refs.input.value;
}
 */
/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/
/* const refs = {
  statList: document.querySelector('.statList'),
  resultButton: document.querySelector('#resultButton'),
  resultSection: document.querySelector('#resultSection'),
};

let sum = 0;
let clicksStat = {};
refs.statList.addEventListener('click', onCalcBtnClick);
function onCalcBtnClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  sum += Number(event.target.dataset.number);
  //   sum += +event.target.dataset.number;

  clicksStat[event.target.textContent] =
    (clicksStat[event.target.textContent] || 0) + 1;
}
refs.resultButton.addEventListener('click', onResultBtnClick);
function onResultBtnClick() {
  console.log(sum);
  console.log(clicksStat);
} */

/*
Завдання 9
Видалити зі списку елементи, які позначені.
*/

/* const checkboxForm = document.querySelector('.checkboxForm');
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
}); */

/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

/*
Завдання 10
Наведено список людей. Зроби можливість сортування списку на ім'я та на прізвище.
*/
