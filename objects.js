// STEPIK JavaScript для начинающих

// ОБЪЕКТЫ


/*
создадим объект и в нем метод, 
выводящий в консоль все свойства этого объекта
*/
var person = {
  name : "Ivan",
  age : 25,
  hiredYear : 2017
}

person.sayAll = function() {
  for (var i in this) {
    console.log(i + " is " + this[i]);
  }
}
// person.sayAll();


/*
вернуть из функции суммарную длину двух строк
*/
function testStr(a, b) {
	return a.length + b.length;
}
// console.log(testStr('5794675', '181683'));


/*
передаются два массива случайной длины заполненные случайными числами. 
Сосчитать сумму всех элементов обоих массивов и возвратить ее из функции.
*/
function testArray(a, b) {
    return a + b;
} 
console.log(testStr([8, 1, 1, 7, 4, 0],  [5, 8, 5, 4, 8]));
