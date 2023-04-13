// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const SuperLinkEl = document.getElementById('super_link');
console.log(SuperLinkEl);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const CardLinkEl = document.querySelectorAll('.card-link');

CardLinkEl.forEach(element => {
    element.textContent = 'ссылка';
    console.log(element);
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const LinkByBodyEl = document.querySelectorAll('.card-body .card-link');
console.log(LinkByBodyEl);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
//Спорное решение (подумать).

const dataNumber50El = document.querySelector('[data-number="50"]');
console.log(dataNumber50El);

// 5. Выведите содержимое тега title в консоль.

const entTitle = document.querySelector('title');
console.log(entTitle.textContent);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const cardTitleAnces = document.querySelector('.card-title');
console.log(cardTitleAnces.parentNode); 

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const cardEl = document.querySelector('.card');

const newParEl = document.createElement('p');
newParEl.textContent = 'Привет';
cardEl.prepend(newParEl);

// 8. Удалите тег h6 на странице.

const deleteTegH6 = document.querySelector('h6');
deleteTegH6.remove();
