/**Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, 
 * состоящую только из открывающих и закрывающих круглых скобок, и проверяет является ли эта строка корректной. 
 * Пустая строка (отсутствие скобок) считается корректной.

Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:

    Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
    Закрывающая скобка не должна идти впереди открывающей.
 */

 /** 
  export default (str) => {
  let acc = 0;
  for (let i = 0; i < str.length; i += 1) {
    const symbol = str[i];
    acc = symbol === '(' ? acc + 1 : acc - 1;
    if (acc < 0) {
      return false;
    }
  }
  return acc === 0;
};
 */


 const areBracketsBalanced = (str) => {
let left='';
let right ='';
let leftCnt = 0;
let rightCnt = 0;
if (str === '') {
    return true;
}
else if (str === ')' || str === '(' || str.length%2 != 0 || str[0]===')' || str[str.length-1] === '(') {
    return false;
}
else {
for (let i = 0; i < str.length; i++ ) {
if (str[i]==='(' && leftCnt >= rightCnt) {
    left += str[i];
    leftCnt ++;

}
else {
    right += str[i];
    rightCnt++;
}

}
return (left.length === right.length);

}

 };

 console.log(areBracketsBalanced('()()()()()()()('));
