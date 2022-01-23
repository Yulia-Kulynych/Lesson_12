//Таблицу с id="age-table".
let tableAge = document.getElementById('age-table');
console.log(tableAge);

//Все элементы label внутри этой таблицы

let elemLabelTableAge = tableAge.getElementsByTagName('label')
console.log(elemLabelTableAge);

//Первый td в этой таблице (со словом «Age»).

let tdAge = tableAge.getElementsByTagName('td')[0];
//let tdAge = tableAge.firstElementChild.firstElementChild.firstElementChild;
console.log(tdAge)

//Форму form с именем name="search".
let formSearch = document.getElementsByName('search')[0];
console.log(formSearch)

//Первый input в этой форме.
let firstInput = document.querySelector('input')
console.log(firstInput)

//Последний input в этой форме.
let allInput = document.querySelectorAll('input')
let lastInput = allInput[allInput.length-1]
console.log(lastInput)