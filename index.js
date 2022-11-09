/* Task 1. Если значение переменной плюсовое, или 0 -
   виводим "positive", в другом случае - " negative".
*/

const number = -3;
const positiveNumber = 0;
if (number >= positiveNumber) {
  console.log("positive");
} else {
  console.log("negative");
}

/* Task 2. Есть 2 переменные - num1 и num2, Если num1 > num2 -
вывести результат вычитания, в другом случае - результат умножения.
*/

const num1 = 7;
const num2 = 2;
if (num1 > num2) {
  console.log(num1 - num2);
} else {
  console.log(num1 * num2);
}

/* Task 3. Если значение переменной кратное 7 и одновременно с этим кратна 3, 
то выводим "you win!", если нет - "you loose!"
*/

const ourNumber = 21;
const condition1 = 7;
const condition2 = 3;
if ((ourNumber % condition1 === 0) && (ourNumber % condition2 === 0)) {
    console.log ('you win!');
} else {
    console.log ('you loose!');
}
