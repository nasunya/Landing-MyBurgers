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



// Слайдер с бургерами

const left  = document.querySelector('.slider__arrow-left');
const right = document.querySelector('.slider__arrow-right');
const items = document.querySelector('.')?






//вебианр 1 variant

const left     = document.querySelector("#left");
const right    = document.querySelector("#right");
const items    = document.querySelector("#items");
const computed = getComputedStyle(items);           //возвращает нам  спец. объект. где прописаны все css свойсвта
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


//вебианр 2 variant

const left  = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

const minRight     = 0;
const maxRight     = 600;
const step         = 100;
let   currentRight = 0;

items.style.right = currentRight;

right.addEventListener("click", function() {
  if (currentRight < maxRight) {
    currentRight      += step;
    items.style.right  = currentRight + "px";
  }
});

left.addEventListener("click", function() {
  if (currentRight > minRight) {
    currentRight      -= step;
    items.style.right  = currentRight + "px";
  }
});
