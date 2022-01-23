

let ul  = document.createElement('ul');
document.body.append(ul);
let li  = document.createElement('li');
li.innerHTML= prompt("Введите первый элемент списка");

ul.prepend(li);
let li2 = document.createElement('li');
li2.innerHTML= prompt("Введите первый элемент списка");
ul.append(li2);
let li3 = document.createElement('li');
li3.innerHTML= prompt("Введите первый элемент списка");
ul.append(li3);