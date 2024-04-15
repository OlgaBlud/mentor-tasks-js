// №1 Рядок складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Перевірте, що другим  символом цього рядка є буква 'b'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

const string = 'abcde';
if (string[1] === 'b') {
  console.log('yes');
} else console.log('no');
string.startsWith('a') ? console.log('yes') : console.log('no');
string.endsWith('a') ? console.log('yes') : console.log('no');

// №2 Перевірити тип value

function checkType(value) {
  const message = `type of ${value} is ${typeof value} `;
  if (typeof value === 'string') {
    return message;
  } else if (typeof value === 'number') {
    return message;
  } else if (value === true || value === false) {
    return message;
  } else return 'Unknown type';
}
console.log(checkType(5));
console.log(checkType('text'));
console.log(checkType());
console.log(checkType(true));
//  №3 перевірити наявність знижки
function hasDiscount(age, isStudent, isPensioner) {
  return isStudent || isPensioner || (age >= 12 && age <= 18);
}
console.log(hasDiscount(19, true, false));
console.log(hasDiscount(19, false, false));
console.log(hasDiscount(19, false, true));
console.log(hasDiscount(18, false, false));
// №4 Чи можна зареєструватись
function canRegisterOnSite(age, hasAcceptedTerms) {
  if (age >= 13 && hasAcceptedTerms === true) {
    console.log('Yes, can register');
  } else if (age >= 13 && hasAcceptedTerms === false) {
    console.log('You should accept terms');
  } else if (age < 13) {
    console.log('You are not adult');
  }
}
canRegisterOnSite(5, true);
canRegisterOnSite(5, false);
canRegisterOnSite(5);
canRegisterOnSite(15, true);
canRegisterOnSite(15, false);
canRegisterOnSite(true);
canRegisterOnSite(false);

// №5
// Перевірити typeof value
// Перетворити на число при можливості
// Якщо це число тл вираховуємо його квадрат
// Повернути текст з результатом

function calculateSquare(value) {
  const numberValue = Number.parseFloat(value);

  if (!isNaN(numberValue)) {
    const squareNum = Math.pow(numberValue, 2);
    return `The square of ${numberValue} is ${squareNum}`;
  } else return `Invalid number, ${numberValue}`;
}
console.log(calculateSquare(7));
console.log(calculateSquare('7.3'));
console.log(calculateSquare('abc 25'));
console.log(calculateSquare(''));

// №6
// Перевірити чи парне число
// Якщо функція отримує не число вивести повідомлення

function isEvenNumber(number) {
  if (!isNaN(number)) {
    //   if (typeof number === 'number') {
    return number % 2 === 0 ? 'Парне число' : 'Непарне число';
  } else return 'Не валідне значення';
}
console.log(isEvenNumber('text')); //Не валідне значення
console.log(isEvenNumber('5')); //Не валідне значення //якщо перевірку на isNan ---Непарне число
console.log(isEvenNumber('4')); //Не валідне значення //якщо перевірку на isNan ---Парне число
console.log(isEvenNumber(5)); //Непарне число
console.log(isEvenNumber(4)); //Парне число
// №7
// Перевірити чи value є рядком і НЕ містить $
// Якщо так - вивести кількість символів
// якщо ні - вивести повідомлення

function checkString(value) {
  if (typeof value === 'string' && !value.includes('$')) {
    console.log(value.length);
  } else console.log('invalid text');
}
checkString();
checkString('text $');
checkString('text');
checkString(true);
checkString(5);
// №8
// Порівняти числа
function compareNumbers(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    console.log('Не числа');
  } else if (num1 > num2) {
    console.log('Перше число більше');
  } else if (num1 < num2) {
    console.log('Друге число більше');
  } else console.log('Числа рівні');
}
compareNumbers(3, 5);
compareNumbers(5, 3);
compareNumbers(5, 5);
compareNumbers('', 5);
compareNumbers(5, true);
// №9
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max
// Порахувати кількість парних чисел

const min = 5;
const max = 12;
let total = 0;
let quantityDoubleNum = 0;

for (let i = max; i >= min; i--) {
  if (i % 2 === 0) {
    console.log(`Парне число в діапазоні:`, i);
    total += i;
    quantityDoubleNum += 1;
  }
}
console.log(`Сума парних чисел:`, total);
console.log(`Кількість парних чисел: `, quantityDoubleNum);
// №10
function getCountryInfo(country) {
  let message = '';
  switch (country) {
    case 'China':
      message = 'Китай найбільша за населенням у світі';
      break;
    case 'Australia':
      message = 'Австралія це найбільший острів в Океанії';
      break;
    case 'France':
      message = 'Франція країна мистецтва і гастрономії';
      break;
    default:
      message = 'Інформація відсутня';
  }
  return message;
}
console.log(getCountryInfo('China'));
console.log(getCountryInfo('Australia'));
console.log(getCountryInfo('France'));
console.log(getCountryInfo('Poland'));
// №11
// Хвилини перевести в рядок годин і хвилин
function formatMinutesToTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const strHours = String(hours).padStart(2, 0);
  //   console.log(strHours);
  const restMinutes = minutes % 60;
  //   console.log(restMinutes);
  const strRestMinutes = String(restMinutes).padStart(2, 0);
  console.log(`${strHours}:${strRestMinutes}`);
}
formatMinutesToTime(5);
formatMinutesToTime(50);
formatMinutesToTime(70);
formatMinutesToTime(119);
formatMinutesToTime(121);
