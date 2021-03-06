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


// МАССИВЫ


/*
передаются два массива случайной длины заполненные случайными числами. 
Сосчитать сумму всех элементов обоих массивов и возвратить ее из функции.
*/
function testArray(a, b) {
	var sumA = 0;
	var sumB = 0;
	for (var i = 0; i < a.length; i++) {
		sumA += a[i];
	}
	for (var i = 0; i < b.length; i++) {
		sumB += b[i];
	}
    return sumA + sumB;
} 
// console.log(testArray([8, 1, 1, 7, 4, 0],  [5, 8, 5, 4, 8]));  // 51


/*
передаются две строки случайной длины и содержания. 
Нужно составить из символов этих строк один массив 
(каждый символ строки становится отдельным элементом массива), 
затем добавить первым элементом  массива текстовое значение "Иванов", 
и вернуть из функции все элементы в обратном порядке, преобразовав в строку.
Обратите внимание, что в обратном порядке нужно переставить элементы 
внутри массива, а данные внутри элементов инвертировать не нужно!
*/
function testArray(a, b) {
	var c  = a + b;
	var mas = c.split('');
	mas.reverse();
	mas.push('Иванов');
	var str = mas.join('');
	return str;
} 
// console.log(testArray('4326',  '297515'));  // 5157926234Иванов


// ДАТА и ВРЕМЯ


//В объект попадут текущие дата и время
// var myDate = new Date()  // Mon May 15 2017 19:20:25 GMT+0300 (RTZ 2 (зима))

// var myDate = new Date("December 14, 1975 12:10:00") // Sun Dec 14 1975 12:10:00 GMT+0300 (RTZ 2 (зима))

// var myDate = new Date(1989, 6, 14)  // Fri Jul 14 1989 00:00:00 GMT+0400 (RTZ 2 (лето))

// var myDate = new Date(1998, 6, 14, 11, 20, 00)

// document.write(myDate);

/*
передаются две строки вида "03 November 2017 04:17". 
превратить строки в даты, сравнить их. 
Для той, что больше получить день недели и вернуть его из функции.
Название дня недели должно быть по-русски, с большой буквы.
*/
function testDateTime(a, b) {
	var dayRu = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    dateA = new Date(a);
    dateB = new Date(b);
    if (dateA > dateB) {
		return dayRu[dateA.getDay()];
	}
    return dayRu[dateB.getDay()];
    
}
// console.log(testDateTime('04 August 1909 00:24', '03 November 1909 06:54'));  // Среда


// Обработка ошибок

/*
функцию передаются два параметра: 
целочисленная переменная ("а") и 
функция ("func"). 
необходимо запустить функцию "func", с переменной "а" в качестве аргумента. 
Вам нужно возвратить имя (свойство "name") возникающей ошибки.
*/
function testErrorFunc(a, func) {         
	try {
		func(a);
	} catch(e) {
		return e.name;
	}
}


// Reg Exp

/*
в функцию первым параметром передается случайная строка(переменная s), 
а вторым - случайная подстрока(переменная sub_s), 
нужно вернуть из функции строку, 
в которой будут перечислены через запятую все совпадения шаблона со строкой.
*/
function testRegExp(s, sub_s) {
	var myPattern = new RegExp(sub_s, 'g');
	return s.match(myPattern).join(',');
}
console.log(testRegExp('Andsirdaarrevarariarewbutovearrmararan', 'ar'));
