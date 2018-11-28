
//menu-acco вертикальный аккордеон

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


//горизонтальный аккордеон 

const accordElement  = document.querySelector('.team');
const accordLink     = document.querySelectorAll('.team-acco__item');
let   accoLinkLength = accordLink.length;


accordElement.addEventListener('click', function(e) {
  for (let i = 0; i < accoLinkLength; i++) {
    accordLink[i].classList.remove('team-acco__item--active');
      
  }
});

for (let i = 0; i < accoLinkLength; i++) {
  accordLink[i].addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      if (accordLink [i].classList.contains('team-acco__item--active')){
        accordLink [i].classList.remove('team-acco__item--active');
      
      } else {
          for (let i=0; i < accoLinkLength; i++) {
            accordLink[i].classList.remove('team-acco__item--active'); 
          }
          accordLink[i].classList.add('team-acco__item--active');
      
      }
  })
  
}


//модальные окна в отзывах
 const reviewsList = document.querySelector('.reviews__list');
 const overlay     = document.querySelector('.overlay');
 const popupText   = document.querySelector('.popup__text');


 reviewsList.addEventListener('click', e => {// event это событие, которое в данном случае произошло по клику
   let element = e.target;  //получаем доступ к элементам при клике

if (element.tagName === "BUTTON") {// при нажатии выводит имя тега 
      let modalText = element.previousElementSibling.innerHTML;

      popupText.innerHTML   = modalText;  // добавляем тоже самое что получили в модалтексте
      overlay.style.display = 'block';
      }

      });
      
      const closeElement = overlay.querySelector('.popup__close');  // получаем доступ к кнопке

      overlay.addEventListener("click", e => { // чтобы при клике на любую часть экрана закрылось окно
        if (e.target === overlay) {// у каждого события есть свойство target , который указывает на какой элемент вообще происходил кликю. если кликнули на оверлей, то закоываем его
          closeElement.click();
        }
      });

      closeElement.addEventListener('click', function(event) {
        event.preventDefault ();
        document.body.removeChild(overlay);// убираем элемент из дом дерево
      });

        
      document.addEventListener('keyup', e => {
      let keyName = e.keyCode;

      if (keyName === 27) {
      overlay.style.display = 'none';
      }
      });


    

    



// слайдер


















 
 
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















