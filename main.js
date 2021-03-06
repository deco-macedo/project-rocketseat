// ABRE E FECHA O MENU QUANDO CLICAR NO ÍCONE (TOGGLE) //

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

/* EXECUTANDO A FUNÇÃO TOGGLE */

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// QUANDO CLICAR EM UM ITEM DO MENU, ESCONDER O MENU //
const links = document.querySelectorAll('nav ul li a')

/* EXECUTANDO A FUNÇÃO ESCONDER */

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// MUDAR O HEADER DA PÁGINA QUANDO DER SCROLL //

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (this.window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

// TESTIMONIALS CAROUSEL SLIDER SWIPER ETC ETC //

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// SCROLLREVEAL: Mostrar elementos quando der scroll na página //

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 100 }
)

// back to top //

const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})

// MENU ATIVO CONFORME A SEÇÃO VISÍVEL NA PÁGINA //
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {}

/* when scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTopButton()
  activateMenuAtCurrentSection()
})
