// ========================================================
// ALEXANDRA'S FLORAL — JavaScript
// ========================================================

// ==================== NAVBAR SCROLL EFFECT ====================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar')
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

// ==================== MOBILE MENU TOGGLE ====================
const hamburger = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobileMenu')

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    mobileMenu.classList.toggle('open')
  })
}

function closeMobileMenu() {
  if (hamburger) hamburger.classList.remove('open')
  if (mobileMenu) mobileMenu.classList.remove('open')
}

// ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href')
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault()
      const target = document.querySelector(href)
      closeMobileMenu()
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})