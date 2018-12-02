
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


// последний вебинар. скролл
const sections = $(".section");
const display  = $(".maincontent");
let   inScroll = false;
const md       = new MobileDetect(window.navigator.userAgent);

const isMobile = md.mobile();

const setActiveMenuItem = itemEq => {
  $(".fixed-menu__item")
  .eq(itemEq)
  .addClass("active")
  .siblings()
  .removeClass("active");
};


const performTransition = sectionEq => {
const position                = `${sectionEq * -100}%`;
const mouseInertionIsFinished = 300;
const transitionIsFinished    = 1000;

if (inScroll === false) {

  inScroll = true;
  display.css({
  transform: `translateY(${position})`
  });
  
  sections
  .eq(sectionEq)
  .addClass("active")
  .siblings()
  .removeClass("active");

  setTimeout (() => {
    inScroll = false;

    setActiveMenuItem(sectionEq);

  }, transitionIsFinished +  mouseInertionIsFinished);
}
};

  const scrollToSection = direction => {
  const activeSection = sections.filter(".active");
  const prevSection   = activeSection.prev();
  const nextSection   = activeSection.next();

 if (direction === "up" && prevSection.length) {
   performTransition(prevSection.index());

 }

 if (direction === "down" && nextSection.length) {
  performTransition(nextSection.index());

 }
};

$(document).on("wheel", e => {

  const deltaY = e.originalEvent.deltaY;

  if (deltaY > 0) {

    console.log('Вниз');
    scrollToSection("down");
  }

  if (deltaY < 0) { 
    console.log('Вверх');
    scrollToSection("up");
  }
});

$(document).on('keydown', e => {

  switch(e.keyCode) {
    case 40: 
    scrollToSection("down");
    break;
    case 38: 
    scrollToSection("up");
    break;
  }

  touchhmove: e => e.preventDefault
});

$('[data-scroll-to]').on('click', e=>{
  e.preventDefault();
  
  const target = $(e.currentTarget)
  .attr("data-scroll-to");
  performTransition(target);
});

if (isMobile) {
  $(document).swipe({
  swipe: function(
    event, 
    direction, 
    distance, 
    duration, 
    fingerCount, 
    fingerData


) {

    const scrollDirection = direction === "down" ? "up" : "down";
    scrollToSection(scrollDirection);
  }
});

}


// -----Видео плеер--------

let player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('yt-player', {
          height    : '405',
          width     : '660',
          videoId   : 'M7lc1UVf-VE',
          playerVars: {
            controls      : 0,
            disablekb     : 0,
            modestbranding: 0,
            rel           : 0,
            autoplay      : 0,
            showinfo      : 0
          },
          events : {
          onReady      : onPlayerReady,
          onStateChange: onPlayerStateChange
          }
        });
      }

  function onPlayerStateChange (event) {
     switch(event.data) {
       case 1: 
       
       $('.player__start').addClass('paused');
       $('.player__wrapper').addClass('active');
       break;
       case 2: 
       $('.player__start').removeClass('paused');
     }

  }



  function  onPlayerReady () {
  const duraction = player.getDuraction();
  let interval;
  $('.player').removeClass('hidden');
  updateTimer();

  clearInterval(interval);
  interval = setInterval(() => {

    const completed = player.getCurrentTime();
    const percent   = (completed / duraction) * 100;

    updateTimer();

    changeButtonPosition(percent);

  }, 1000);
   }


   function updateTimer() {
     $('.player__duration-completed').text(formatTime(player.getCurrentTime() ));
     $('.player__duration-estimate').text(formatTime(player.getDuraction() ));
   }

   function formarTime(time) {
     const roundTime = Math.round(time);


     const minutes          = Math.floor(roundTime / 60);
     const seconds          = roudTime - minutes * 60;
     const formattedSeconds = seconds < 10 ? `0${second}` : seconds;

     return minutes + ":" + formattedSeconds;
   }

    $(".player__start").on('click', e => {
//-1 (воспроизведение видео не начато)
// 0 (воспроизведение видео завершено)
// 1 (воспроизведение)
// 2 (пауза)
// 3 (буферизация)
// 5 (видео подают реплики).
      const playerStatus = player.getPlayerState();
      if (playerStatus !== 1) {
        player.playVideo();
    
      }else {
        player.pauseVideo();
        
      }
      
    });

    $('.player__playback').on('click', e => {
      const bar               = $('e.currentTarget');
      const newButtonPosition = e.pageX - bar.offset().left;
      const clickedPercent    = (newButtonPosition / bar.width()) * 100;
      const newPlayerTime     = (player.getDuration() / 100) * clickedPercent;

      changeButtonPosition(clickedPercent)
      player.seekTo(newPlayerTime)
          });

  
$('.player__splash').on('click', e => {
 
});


    function changeButtonPosition(percent) {
      $('.player__playback-button').css({
      left: `${percent}%`
      });
  
    }


    

// yandex map

ymaps.ready(init);

var placemarks = [
  {
    latitude      : 59.97,
    longitude     : 30.31,
    hintContent   : '<div class="map__item map__hint">улица Литераторов, 17</div>',
    balloonContent: [
      '<div class="map__item map__balloon">',
      '<img class="map__balloon"/>',
      '<div class="map__text">Самые вкусные бургеры у нас!</div>',
      '<div class="map__text">Заходите по адресу: <b> ул.Литераторов, 17</b></div>',
      '</div>'
    ]
  }, {
    latitude      : 59.94,
    longitude     : 30.25,
    hintContent   : '<div class="map__item map__hint">Малый проспект В О, 64</div>',
    balloonContent: [
      '<div class="map__item map__balloon">',
      '<img class="map__balloon"/>',
      '<div class="map__text">Самые вкусные бургеры у нас!</div>',
      '<div class="map__text">Заходите по адресу: <b>Малый проспект В О, 64</b></div>',
      '</div>'
    ]
  }, {
    latitude      : 59.93,
    longitude     : 30.34,
    hintContent   : '<div class="map__item map__hint">Наб. реки Фонтанки, 56</div>',
    balloonContent: [
      '<div class="map__item map__balloon">',
      '<img class="map__balloon"/>',
      '<div class="map__text">Самые вкусные бургеры у нас!</div>',
      '<div class="map__text">Заходите по адресу: <b>Наб. реки Фонтанки, 56</b></div>',
      '</div>'
    ]
  }, {
    latitude      : 59.93,
    longitude     : 30.40,
    hintContent   : '<div class="map__item map__hint">Малоохтинский проспект, 61</div>',
    balloonContent: [
      '<div class="map__item map__balloon">',
      '<img class="map__balloon"/>',
      '<div class="map__text">Самые вкусные бургеры у нас!</div>',
      '<div class="map__text">Заходите по адресу: <b>Малоохтинский проспект, 61</b></div>',
      '</div>'
    ]
  }
];

function init() {
  var map = new ymaps.Map('map', {
    center   : [59.94, 30.32],
    zoom     : 12,
    controls : ['zoomControl'],
    behaviors: ['drag'],
  });

  placemarks.forEach(function (obj) {
    let placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
      hintContent   : obj.hintContent,
      balloonContent: obj.balloonContent.join('')
    },
      {
        iconLayout     : 'default#image',
        iconImageHref  : './icons/map-marker.svg',
        iconImageSize  : [46, 58],
        iconImageOffset: [-23, -57]
      });

    map.geoObjects.add(placemark);
  });
};











    
// // Form 
// const myForm = document.querySelector('#myForm');
// const send   = document.querySelector('#send');

// send.addEventListener('click', event => {
//   event.preventDefault();

//   if (validateForm(myForm)) {
//     const data = {
//       name : myForm.elements.name.value,
//       phone: myForm.elements.phone.value,
//       email: myForm.elements.comment.value
//     };

//    const xhr              = new XMLHttpRequest();
//          xhr.responseType = 'json';
//     xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
//     xhr.send(JSON.stringify(data));
//     xhr.addEventListener('load', () => {
//        if (xhr.response.status) {
//          console.log('Все ок!');
//        }
//     });
//   }
// });

// function validateForm(form) {
//   let valid = true;


//   if (!validateField(form.elements.name)) {
//     valid = false;
//   }
//   if (!validateField(form.elements.phone)) {
//     valid = false;
//   }
//   if (!validateField(form.elements.comment)) {
//     valid = false;
//   }
//   return valid;
// }

// function validateField(field) {
//     field.nextElementSibling.textContent = field.validationMessage;
//       return field.checkValidity();

// }
















