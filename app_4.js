// каждый элемент списка <li>:
for (let liElement of document.querySelectorAll('li')){}

//в нём текст (без поддерева)
for (let liElement of document.querySelectorAll('li')){
    let textLi = liElement.firstChild.data;
}
//Какое число потомков – всех вложенных <li>
liElement.getElementsByTagName('li').length