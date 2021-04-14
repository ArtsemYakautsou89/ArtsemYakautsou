// Создать div
const div = document.createElement('div');
// Добавить div класс wrapper
div.classList.add('wrapper');
// Поместить div внутрь тега body
// const body = document.querySelector('body');тоже самое - напрямую обращаемся к body
const body = document.body;
body.appendChild(div);
//Создать заголовок H1 "DOM (Document Object Model)"
const header = document.createElement('h1');
header.textContent = 'DOM (Document Object Model)';
// Заголовок H1 поместить перд div с классом wrapper
div.insertAdjacentElement('beforebegin', header);
//Создать список ul и поместить список внутрь элемента div с классом wrapper
const ul = `
  <ul>
      <li>Один</li>
      <li>Два</li>
      <li>Три</li>
  </ul>
`
div.innerHTML = ul;
// Создать изображение 
const img = document.createElement('img');
img.src = 'img/1.jpeg'
img.width = 340;
img.classList.add('js');
img.alt = 'Javascript';
img.style.margin = '50px';
div.appendChild(img);
//Использую HTML строку созать DIV с классом 'pDiv' + c 2 параграфами
const elemHTML = `
<div class='pDiv'>
    <p>Параграф 1</p>
    <p>Параграф 2</p>
</div>`
const ulList = div.querySelector('ul');
ulList.insertAdjacentHTML('beforebegin', elemHTML);
// Добавить для 2 параграфа класс text
const pDiv = document.querySelector('.pDiv');
pDiv.children[1].classList.add('text');
//удалить 1 параграф из списка ulList
pDiv.firstElementChild.remove();
// Создать функцию generateAutoCard
// Которая принимает 3 аргумента: brand , color, year
// Функция должна возвращать разметку HTML: 
// <div class='autoCard'>
//     <h2>BRAND YEAR</h2>  
//     <p>Автомобиль BRAND - YEAR года. Возраст автомобиля - YEARS лет.</p>
// </div>
const generateAutoCard = (brand, color, year) => {
        const curDate = new Date();
        const curYear = curDate.getFullYear();
        return `
    <div class='autoCard'>
        <h2>${brand.toUpperCase()} ${year}</h2>  
        <p>Автомобиль ${brand.toUpperCase()} - ${year} года. Возраст автомобиля ${curYear - year}-  лет.</p>
        <p>Цвет авто - ${color}.</p>
        <button type='button' class = 'btn'>Удалить</button>
    </div>
    `;
    }
    // Создать новый div c классом autos
const carsDiv = document.createElement('div');
carsDiv.classList.add('autos');

// Создать 3 карточки авто , использую функцию generateAutoCard
const carsList = [
    { brand: 'Tesla', year: 2015, color: 'красный' },
    { brand: 'Lexus', year: 2016, color: 'золотой' },
    { brand: 'Nissan', year: 2012, color: 'черный' },
]
const carsHtml = carsList.map(car => {
    return generateAutoCard(car.brand, car.color, car.year);
}).join('');
carsDiv.innerHTML = carsHtml;
div.insertAdjacentElement('beforebegin', carsDiv);
// Добавить кнопку Удалить на каждую карточку товаров
// 1 Выбрать все кнопки
const buttons = document.querySelectorAll('.btn');
// 2 Создать функцию удаления
function handleClick(e) {
    const currentButton = e.currentTarget;
    currentButton.closest('.autoCard').remove();
    //currentButton.parentElement.remove(); тоже самое что предыдущая строка, но менее функционально
}
// 3 Повесить обработчик событий на каждую кнопку
buttons.forEach(button => {
    button.addEventListener('click', handleClick)
});