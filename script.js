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

//email
function sendEmail() {
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const subject = document.getElementById('subject').value
  const message = document.getElementById('message').value

  const mailtoLink = `mailto:tsahu9461@gmail.com?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(
    'Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message,
  )}`
  window.location.href = mailtoLink
}

//pdf download
document
  .getElementById('download-cv-btn')
  .addEventListener('click', function () {
    var downloadLink = document.createElement('a')
    downloadLink.href =
      'https://docs.google.com/document/d/1OAZsmFq94dvT4iu88vNP2pD4K7BXegeFrLQT-eJmNrc/edit' // Replace with the actual path to your PDF file
    downloadLink.download = 'Resume' // Specify the file name for download
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  })

//access to all of my projects
document
  .getElementById('completed-projects')
  .addEventListener('click', function () {
    var downloadLink = document.createElement('a')
    downloadLink.href =
      'https://docs.google.com/document/d/1F2XIzE6mQFxuvBfRSsK9xlbbKVZkEBJ9URFlGLJX_qg/edit?usp=sharing' // Replace with the actual path to your PDF file
    downloadLink.download = 'Projects completed' // Specify the file name for download
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  })

//logo-nav
document.addEventListener('DOMContentLoaded', function () {
  var logo = document.querySelector('.main-logo')
  logo.addEventListener('click', function () {
    window.location.href = '#home' // Replace with your home page URL
  })
})

function myMenuFunction() {
  var menuBtn = document.getElementById('myNavMenu')
  if (menuBtn.classList.contains('responsive')) {
    menuBtn.classList.remove('responsive')
  } else {
    menuBtn.classList.add('responsive')
  }
}

//navigation from hire to contact
document.getElementById('hire-me-btn').addEventListener('click', function () {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
})

document.addEventListener('DOMContentLoaded', function () {
  const hireMeBtn = document.querySelector('.about-me-btn')
  const contactSection = document.getElementById('contact')

  hireMeBtn.addEventListener('click', function () {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  })
})

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
srRight.reveal('.form-control', { delay: 100 })

// active link

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.nav-link[href="#home"]').classList.add('active-link')
})

// Update the active link based on the clicked navigation link
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', function () {
    document
      .querySelectorAll('.nav-link')
      .forEach((link) => link.classList.remove('active-link'))
    this.classList.add('active-link')
  })
})
