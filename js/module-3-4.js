//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']
function logItems(array) {
  let itemNum = 0;
  let itemName = '';
  let message = '';
  for (let i = 0; i < array.length; i++) {
    itemNum = i + 1;
    itemName = array[i];
    message = `${itemNum} - ${itemName}`;
    console.log(message);
  }
}
const music = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];
const result = logItems(music);
console.log(result);

//Напишіть функцію calculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.
function calculateAverage(...args) {
  let sum = 0;
  let count = 0;
  for (const arg of args) {
    if (typeof arg === 'number') {
      sum += arg;
      count += 1;
    }
  }
  return sum / count;
}
const result2 = calculateAverage();
console.log(result2);
