//menu-acco

const acco           = document.querySelector('.menu');
const accoItem       = document.querySelectorAll('.menu-acco__item');
let   accoItemLength = accoItem.length;


acco.addEventListener('click', function(e) {
    for (let i = 0; i < accoItemLength; i++) {
        accoItem[i].classList.remove('menu-acco__item--active');
        
    }
});

for (let i = 0; i < accoItemLength; i++) {
    accoItem[i].addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        if (accoItem[i].classList.contains('menu-acco__item--active')){
            accoItem[i].classList.remove('menu-acco__item--active');
        
        } else {
            for (let i=0; i < accoItemLength; i++) {
            accoItem[i].classList.remove('menu-acco__item--active'); 
            }
            accoItem[i].classList.add('menu-acco__item--active');
        
        }
    })
    
}
//calculateWith()
// ширину окна
// ширину accoItem
// return reqWidth ширина окна - (ширина accoItem * accoItem.length)
//.menu-acco__content
// elem.style.width = reqWidth + 'px'


// menu burger


const hamburger   = document.querySelector('.hamburger-menu-link');
const burgerMenu  = document.querySelector('.burger__menu');
const burgerClose = document.querySelector('.burger__close')


hamburger.addEventListener('click', function(e) {
  burgerMenu.classList.add('burger__menu--active');
});


burgerClose.addEventListener('click', function(e) {
  burgerMenu.classList.remove('burger__menu--active');
});













//вебианр 1 variant
//const left     = document.querySelector("#left");
//const right    = document.querySelector("#right");
//const items    = document.querySelector("#items");
//const computed = getComputedStyle(items);           //возвращает нам  спец. объект. где прописаны все css свойсвта
//к данному объекту. и при обращении к определенному css свойству  мы получаем значение. он нужне чтобы следить за текущим заачением сво-ва right


right.addEventListener("click", function(e) {
  e.preventDefault(); //чтобы не подпрыгивало стр
  let currentRight = parseInt(computed.right);  //узнаем текущее значение right

  if (!currentRight) {//вспомогательное условие если parsInt вернет нам не число
    currentRight = 0;
  }
  
  if (currentRight < 500) {//если не дошли до конца, то прибавлем еще 100
    items.style.right = currentRight  + 100 + "px";  //текущая координата currenRight
  }
});

left.addEventListener("click", function(e) {
  e.preventDefault();
  let currentRight = parseInt(computed.right);

  if (!currentRight) {
    currentRight = 0;
  }

  if (currentRight > 0) {// если мы не на первом элементе, то листаем в обратную сторону
    items.style.right = currentRight - 100 + "px";
  }
});


//вебианр 2 variant  - не обращаемся к DOM дереву

// const left  = document.querySelector("#left");
// const right = document.querySelector("#right");
// const items = document.querySelector("#items");

// const minRight     = 0;
// const maxRight     = 600;
// const step         = 100;
// let   currentRight = 0;    //слайде при загрузке стр всегда вначале

// items.style.right = currentRight;

// right.addEventListener("click", function() {
//   if (currentRight < maxRight) {
//     currentRight      += step;                 //currentRight      +step
//     items.style.right  = currentRight + "px";
//   }else {
//     currentRight      = 0  // постоянная прокрутка
//     items.style.right = 0  //
// });

// left.addEventListener("click", function() {
//   if (currentRight > minRight) {
//     currentRight      -= step;
//     items.style.right  = currentRight + "px";
//   } else {
//     currentRight      = maxRight;
//     items.style.right = currentRight + "px";
// });


// overlay 1 способ

// const openButton     = document.querySelector("#openOverlay");
// const successOverlay = createOverlay("Привет, <b>loftschool</b>!");  //createOverlay создает overlay

// openButton.addEventListener("click", function() {
//   document.body.appendChild(successOverlay);// добавь вот тот overlay , который мы создали на 2 строке добавь его в DOM дерево, а на кнопке закрыть document.body.removeChild(overlayElement) убираем его
// });

// function openOverlay(content) { // функция только создает overlay но не добавляет на страницу
//   const overlayElement = document.createElement("div");  //создаем сам overlay элемент див
//   overlayElement.classList.add("overlay");// с класссом .overlay

//   const containerElement = document.createElement("div");
//   containerElement.classList.add("container");

//   const contentElement = document.createElement("div");  // создаем контентную часть "Привет, <b>loftschool
//   contentElement.classList.add("content");
//   contentElement.innerHTML = content;  // пучть содержимым дива  будет тот контент, который мв попросили в это див положить

//   const closeElement = document.createElement("a");  // кнопка закрытить. ссылка
//   closeElement.classList.add("close");//класс
//   closeElement.textContent = "x";  //текстовое содержимое
//   closeElement.href        = "#";
//   closeElement.addEventListener("click", function(event) {//.
//     event.preventDefault ();
//     document.body.removeChild(overlayElement);// removeChild - происходит изъятие элмента  overlayElement из body-тела документа
//   });

//   overlayElement.appendChild(containerElement);// говорим положи container в overlay
//   containerElement.appendChild(closeElement); // положи кнопку закрытия в контейнер
//   containerElement.appendChild(contentElement);// положи контентную часть в контейнер 

//   return overlayElement;// верни, что получилось
// }



// overlay 2 способ - вынесли верстку в html
const openButton     = document.querySelector("#openOverlay");
const successOverlay = createOverlay("Привет, <b>loftschool</b>!");

openButton.addEventListener("click", function() {
  document.body.appendChild(successOverlay);
});

function createOverlay(content) {// создаем корневой элемент див к лассом оверлей 
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template                 = document.querySelector("#overlayTemplate");  // получаем доступ к ID 
        overlayElement.innerHTML = template.innerHTML;                          // и берем из него html и кладем в корневой элемент overlayElement.innerHTML

  const closeElement = overlayElement.querySelector(".close");  // получаем доступ к кнопке
  closeElement.addEventListener("click", function(event) {
    event.preventDefault ();
    document.body.removeChild(overlayElement);// убираем элемент из дом дерево
  });

  const contentElement           = overlayElement.querySelector(".content");  // получаем доступ
        contentElement.innerHTML = content;                                   // и даем какое-то html содержимое

  return overlayElement;
}

// // overlay 3 способ 
// сonst openButton = document.querySelector(".openOverlay");                // получили доступ к кнопке закрытия
// const template   = document.querySelector("#overlayTemplate").innerHTML;  // получили доступ к шаблону и сразу получили innerHTML
// const overlay    = createOverlay(template);                               //создали оверлей и дали шаблон по которому нужно создать оверлей

// openButton.addEventListener("click", function() {
//   overlay.open();
//   overlay.setContent("Спасибо, данные сохранены");
// });

// function createOverlay(template) {
//   let fragment = document.createElement('div');  // создаем элемент заглушкуи называем фрагмент. гооврим создай див и положи в него содержимое шаблона

//   fragment.innerHTML = template;  // внутрь дива помещаем наш шаблон

//   const overlayElement = fragment.querySelector(".overlay");  // получаем доступ к элементам в оверлей
//   const contentElement = fragment.querySelector(".content");
//   const closeElement   = fragment.querySelector(".close");
  
//   fragment = null;

//   overlayElement.addEventListener("click", e => { // чтобы при клике на любую часть экрана закрылось окно
//     if (e.target === overlayElement) {// у каждого события есть свойство target , который указывает на какой элемент вообще происходил кликю. если кликнули на оверлей, то закоываем его
//       closeElement.click();
//     }
//   });
//   closeElement.addEventListener("click", () => {//при клике на крестик убираем оверлей
//     document.body.removeChild(overlayElement);
//   });

//   return {// возвращаем объект 
//     open() {
//       document.body.appendChild(overlayElement);
//     },
//     close() {
//       closeElement.click();
//     },
//     setContent(content) {// кнопка установить контент оверлкю 
//       contentElement.innerHTML = content;
//     }
//   };
// }
