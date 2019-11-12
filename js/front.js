//Scroll page

//Onepage scroll
jQuery(function ($) {
  if ($(window).width() > 992 ) {
(function (e) {
  var container = document.querySelector('.main_wrapper');
  var items = Array.from(container.querySelectorAll('.section'));
  let itemsNumber = items.length;
  var navLinks = Array.from(document.querySelectorAll('.menu__link'));
  let currentItemIndex = 0;
  let scroll = true;

  var moveSection = index => {
    let positionTop = (-index * 100) + '%';
    container.style.top = positionTop;
  };

  var setLocation = index => window.location = `#${items[index].id}`;

  // Set strart params
  container.style.top = 0;
  setLocation(currentItemIndex);
  itemsNumber--;

  // Scrolling section by navigation.
  navLinks.forEach(element => {
    element.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();

      let sectionID = element.getAttribute('href').slice(1);

      currentItemIndex = items.findIndex(element => {
        return element.id === sectionID;
      });

      moveSection(currentItemIndex);
    });
  });

  // Scrolling sections by mouse/touchpad.
  window.addEventListener('wheel', event => {
    event.preventDefault();
    event.stopPropagation();

    let direction = event.deltaY;

    if (scroll) {
      if (direction > 0 && currentItemIndex < itemsNumber) {
        currentItemIndex++;
        scroll = false;
      } else if (direction < 0 && currentItemIndex !== 0) {
        currentItemIndex--;
        scroll = false;
      }
      moveSection(currentItemIndex);
    }

  });

  container.addEventListener('transitionend', () => {
    setTimeout(() => scroll = true, 200);
    setLocation(currentItemIndex);
  });

})();

  }
});


var header = document.getElementById("menu");
var btns = header.getElementsByClassName("menu__link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


//Slider
$('.owl-carousel').owlCarousel({
  items: 3,
  lazyLoad: true,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    760: {
      items: 1,
      nav: false
    },
    1200: {
      items: 2,
      nav: true,
      loop: false
    }
  }
});

//Reviews


/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
