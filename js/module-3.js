// Module 3
function getCommonElements(array1, array2) {
  let newArray = [];

  console.log('Перший масив: ', array1);
  console.log('Другий масив: ', array2);
  console.log('Новий масив: ', newArray);

  for (let i = 0; i < array1.length; i += 1) {
    console.log(
      'Окреме значення з масиву з індексом "і"› на кожній ітерації : ',
      array1[i]
    );
    if (array2.includes(array1[i])) {
      console.log(
        `Як змінюється масив на ітераціях, якщо задана умова = true, то відбувається push : [${newArray}]"+"${array1[i]}`
      );
      newArray.push(array1[i]);
    }
  }
  return newArray;
}
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // повертає [12, 27, 3]
//console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // повертає [10, 30, 40]
//console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // повертає []
