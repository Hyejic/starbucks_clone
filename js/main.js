const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); // html 속성 셋팅
});
searchInputEl.addEventListener('blur',function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); // html 속성 셋팅
});

const badgeEl = document.querySelector('.badges');
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(function() {
  if(window.scrollY > 500) {
    //gsap.to(요소, 지속시간, 옵션)
    //버튼 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    //버튼 보이기
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 0
    })
  }else{
    //버튼 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
},300));
// _.throttele(함수, 시간)
toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0,
  })
});

const fadeEls = document.querySelectorAll('.fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1,
  })
})


const swiper = new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  loop: true,
  autoplay: true,
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop:true,
  speed: 1000,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl : '.promotion .swiper-prev',
    nextEl : '.promotion .swiper-next'
  },
})
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl : '.awards .swiper-prev',
    nextEl : '.awards .swiper-next'
  },
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion // isHidePromotion을 ture로 만들어라. 반대값으로 전환
    if(isHidePromotion) {
      promotionEl.classList.add('hide');
    }else {
      promotionEl.classList.remove('hide');
    }
});

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, //무한반복
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐의 여부를 감시할 요소
      triggerHook: .8, // 뷰포트 세로 높이에서 위에서부터 80%정도 즈음....
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021