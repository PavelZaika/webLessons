/*


Пары неотрицательных целых чисел можно представить числами и 
арифметическими операциями. Можно считать, что пара чисел a и b – это 2^a * 3^b.

Функции car и cdr при этом будут просто вычислять значения a и b 
(кратности двойки и тройки, соответственно), раскладывая аргумент на множители.

Например, имея пару 5, 8 в виде числа 209952 (2^5 * 3^8), 
можно получить первый элемент пары, разложив число на множители и 
вычислив факторизацию для числа 2, а второй элемент пары – разложив число 
на множители и вычислив факторизацию для числа 3.
pairs.js

Реализуйте и экспортируйте следующие функции в соответствии с алгоритмом выше:

    cons
    car
    cdr

Пример:

const pair = cons(5, 8);    // 2^5 * 3^8 = 209952
car(pair); // 5
cdr(pair); // 8

Подсказки

    Пара – это число, поэтому, чтобы получить из него исходные значения a и b, нужно раскладывать число на множители.



*/

const cons = (a, b) => {
    return 2 ** a * 3 ** b;
};


const car = (number, count = 0) => {

    if (number % 2 === 0) {
        count++;
        return car(number / 2, count);
    }
    else if (number === 1) {

        return count;
    }

    return count;

};



const cdr = (number, count = 0) => {


    if (number % 2 === 0) {

        return cdr(number / 2);
    }

    else if (number % 3 === 0) {
        count++;
        return cdr(number / 3, count);
    }

    if (number === 1) {

        return count;
    }



    return count;
};

const pair2 = cons(5,8);
   console.log(pair2);
   console.log(car(pair2));
   console.log(cdr(pair2));

  const pair = cons(2,1);
   console.log(pair);
   console.log(car(pair));
   console.log(cdr(pair));