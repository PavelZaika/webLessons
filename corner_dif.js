/* Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает наименьшую разницу между ними.

Примеры:

diff(0, 45) === 45;         // не 315, а 45, потому что 45 меньше
diff(0, 180) === 180;
diff(0, 190) === 170;       // не 190, а 170, потому что 170 меньше
diff(120, 280) === 160;
*/


const diff = (a, b) => (a === 0 && b > 180) ? 360 - b : b - a;



console.log(diff(0, 45));
console.log(diff(0, 180));
console.log(diff(0, 190));
console.log(diff(120, 280));
console.log(diff(0 , 170));

