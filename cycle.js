// STEPIK JavaScript для начинающих

// Циклы

/*
 Даны два целых числа k и n. 
 Верните из функции строку, которая состоит из чисел n, повторяющихся k раз, разделенных пробелом. 
 Известно, что и k и n больше 1.
 */
function testCycle(k, n) {
    var x = '';
    for (i = 1; i <= k; i++) {
        if (i == k) {
			x += n;
		} else {
			x += n + ' ';
		} 
        
    }
    return x;
}
// console.log(testCycle(5, 6));


/*
Даны числа a и b. 
Выведите строку с числами от а до b, разделенных пробелами. 
Известно, что b больше a. 
 */
function testCycle(a, b) {
    var x = '';
    for (i = a; i <= b; i++) {
		if (i == b) {
		x += i;
		} else {
		x += i + ' ';	
		} 
	}
    return x;
}
//console.log(testCycle(5, 8));


/*
Даны числа a и b. 
Выведите строку с числами между а и b отсортированными по возрастанию. 
Неизвестно, какое из чисел больше, но известно, что и a и b больше 0.
*/
function testCycle(a, b) {
    var x = '';
	if (a > b) {
	b = [a, a = b][0];
	}
	for (i = a; i <= b; i++) {
		if (i == b) {
			x += i;
		} else {
			x += i + ' ';
		}
	}
	return x;
}
// console.log(testCycle(15, 9));

/*
Даны числа a и b. 
Выведите строку с числами от большего числа до меньшего. 
Известно, что и a и b больше 1, но неизвестно, какое из них больше
*/
function testCycle(a, b) {
    var x = '';
	if (a > b) {
	b = [a, a = b][0];
	}
	for (i = b; i >= a; i--) {
		if (i == a) {
			x += i;
		} else {
			x += i + ' ';
		}
	}
	return x;
}
// console.log(testCycle(5, 19));


 /*
 Даны числа a и b. 
 Найдите сумму квадратов чисел между a и b включительно. 
 Неизвестно, какое из чисел a или b больше. 
 */
function testCycle(a, b) {
    var x = 0;
	if (a > b) {
		b = [a, a = b][0];
	}
	for (i = a; i <= b; i++) {
		x += i * i;
	}
	return x;
}
// console.log(testCycle(2, 7));


/*
Дано целое число n, большее 1. 
Найти квадрат данного числа
необходимо вывести строку, состоящую из квадратов всех чисел от 1 до n. 
*/
function testCycle(n) {
    var x = '';
    for (i = 1; i <= n; i++) {
		if (i == n) {
			x  += (i * i);
		} else {
			x  += (i * i) + ' ';
		}
	}
    return x;
}
// console.log(testCycle(9));


/*
Дано число n (n > 0). 
Верните из функции следующую сумму: 1+1.5+2+2.5+...+n
*/
function testCycle(n) {
    var x = 0;
    for (i = 1; i <= n; i = i + 0.5) {
		x += i;
	}
    return x;
}
// console.log(testCycle(2));

/*
Дано число n (n > 0). 
Верните из функции значение двойного факториала
n = 5: n!!=5∗3∗1=15n!!=5∗3∗1=15
n = 6: n!!=6∗4∗2=48
*/
function testCycle(n) {
    var x = 1;
    for (i = n; i >= 1; i = i - 2) {
		x *= i;
	}
    return x;
}
// console.log(testCycle(6));


/*
Найдите наибольший общий делитель чисел a и b
*/
 function testCycle(a, b) {
    var x;
    var nod = 1;
    if (a > b) {
		b = [a, a = b][0];
	}
	while (nod != 0) {
		nod = b % a;
		x = a;
		b = a;
		a = nod;
		if (nod == 1) {
			x = nod;
			break;
		}
	}
    return x;
}
// console.log(testCycle(15, 35));

function testCycle(a, b) {
   return b ? testCycle(b, a % b) : a;
}
// console.log(testCycle(15, 35));


/*
Дано число n (n > 0). 
Проверьте, простое оно или составное
Math.ceil(Math.sqrt(n))
*/
function testCycle(n) {
    var x = "Простое число";
    for (i = 2; i <= n/2; i++) {
		if (n % i == 0) {
			x = "Составное число";
			break;
		}
	}
    return x;
}
// console.log(testCycle(5)); // 1013 простое

function testCycle(n) {
    for(var i = 2; i <= n/2; i++)
        if(!(n%i)) return "Составное число";
    return "Простое число";
}
// console.log(testCycle(1013)); // 1013 простое


/*
Дано число n (n > 1). 
Выведите строку, состоящую из простых чисел, меньших n. 
Воспользуйтесь решетом Эратосфена. 
Единицу не считаем простым числом
*/
function testCycle(n) {
    var x = " ";
	for (i = 2; i < n; i++) {
		for (j = 2; j < i; j++) {
			if (i % j == 0) {
				break; // Составное число
			}
		}
		if (i == j) {
			x += i + ' ';
		}	
	}
    return x;
}
// console.log(testCycle(20));


/*
Дано число n. 
Найдите сумму его цифр.
*/
function testCycle(n) {
    var x = 0;
    while (n > 0){
        x += n % 10;
        n = (n - n % 10) / 10;
    }
    return x;
}
// console.log(testCycle(4907)); // 20


/*
Дано число n. 
Переведите его в двоичную систему счисления
*/
function testCycle(n) {
    var x = '';
    var str = '';
    while (n >= 1) {
		if (n % 2 != 0) {
			str += '1';
			n = n / 2 - 0.5;
		} else {
			str += '0';
			n = n / 2;
		} 
	}
	for (i = str - 1; i >= 0; i--) {
		x += str.charAt(i);
	}
    return x;
}

function testCycle(n) {
    var x = '';
    
    while (n > 0) {
      x = n - (n - n % 2) + x;
      n = (n - n % 2) / 2;
    }

    return x;
}
// console.log(testCycle(156));  // 10011100


/*
Дано число n (n > 1). 
Верните из функции n-ное число Фибоначчи
*/
function testCycle(n) {
    var x = 1;
    var previousValue = 1;
    var temp;
    if (n == 1 || n == 2) {
		return x;
	}
    for (i = 3; i <= n; i++) {
		temp = x;
		x = x + previousValue;
		previousValue = temp;
	}
    return x;
}

function testCycle(n) {
    var x = 1, y = 1;
    c = 2
    while(c <= n){
        y = x + y
        x = y - x
        c++
    }
    return x;
}
// console.log(testCycle(11));  //  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89


/*
Факториал
*/
function factorial(x) {    
  if (x <= 1) return 1;   
  return x * factorial(x-1);
}
//console.log(factorial(3));

function testFactorial(inputData) {
  if (inputData == 0) {return 1}
  return (inputData - 1)?(inputData * testFactorial(inputData - 1)):inputData;
}


/*
Дано натуральное число n. 
Напишите рекурсивную функцию, 
которая возвращает строку чисел от 1 до n, разделенных пробелом.
*/
function my_function(n) {
    if (n == 1) { 
		return n;
	}
	else {
		return my_function(n - 1)  + ' ' + n;
	}
}
console.log(my_function(3));
