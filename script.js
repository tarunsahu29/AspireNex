document.addEventListener('click', function (event) {
  var menuBtn = document.getElementById('myNavMenu')
  var menuIcon = document.querySelector('.nav-menu-btn i')

  // Check if the click was outside the menu and the menu is open
  if (
    !menuBtn.contains(event.target) &&
    event.target !== menuIcon &&
    menuBtn.classList.contains('responsive')
  ) {
    menuBtn.classList.remove('responsive')
  }
})

function myMenuFunction() {
  var menuBtn = document.getElementById('myNavMenu')
  if (menuBtn.classList.contains('responsive')) {
    menuBtn.classList.remove('responsive')
  } else {
    menuBtn.classList.add('responsive')
  }
}

// Dark Mode

const body = document.querySelector('body'),
  toggleSwitch = document.getElementById('toggle-switch')

toggleSwitch.addEventListener('click', () => {
  body.classList.toggle('dark')
})

// Typing Effect

var typingEffect = new Typed('.typedText', {
  strings: ['Designer', 'Coder', 'Developer'],

  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
})

// Scroll animation

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
})

sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.text-info', { delay: 200 })
sr.reveal('.text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 320 })

sr.reveal('.project-box', { interval: 200 })
sr.reveal('.top-header', {})

const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true,
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true,
})
srRight.reveal('.skill', { delay: 100 })
srRight.reveal('.skill-box', { delay: 100 })

// active link

// const sections = document.querySelectorAll('.section[id]')

// function scrollActive() {
//   const scrollY = window.scrollY
//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 50,
//       sectionId = current.getAttribute('id')
//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector('.nav-menu a[href*=' + sectionId + ']')
//         .classList.add('active-link')
//     } else {
//       document
//         .querySelector('.nav-menu a[href*=' + sectionId + ']')
//         .classList.remove('active-link')
//     }
//   })
// }

// window.addEventListener('scroll', scrollActive)
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section[id]');

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');
      const sectionLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        sectionLink.classList.add('active-link');
      } else {
        sectionLink.classList.remove('active-link');
      }
    });

    // Check if no section is in view, if so, activate the "Home" link
    const activeLinks = document.querySelectorAll('.nav-menu .active-link');
    if (activeLinks.length === 0) {
      document.querySelector('.nav-menu a[href*="#home"]').classList.add('active-link');
    }
  }

  window.addEventListener('scroll', scrollActive);

  // Initial call to set the active link when the page loads
  scrollActive();
});




