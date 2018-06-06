STEPIK JavaScript для начинающих

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
