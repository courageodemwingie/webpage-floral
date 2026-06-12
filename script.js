// ========================================================
// ALEXANDRA'S FLORAL — JavaScript
// ========================================================

// WHATSAPP NUMBER — Change this to your actual number
const WHATSAPP_NUMBER = '2348000000000'

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

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open')
  mobileMenu.classList.toggle('open')
})

function closeMobileMenu() {
  hamburger.classList.remove('open')
  mobileMenu.classList.remove('open')
}

// ==================== WHATSAPP INTEGRATION ====================
function openWhatsApp(message = null) {
  const defaultMessage = "Hello Alexandra's Floral, I would like to place an order."
  const msg = message || defaultMessage
  const encodedMessage = encodeURIComponent(msg)
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
  window.open(whatsappURL, '_blank', 'noopener,noreferrer')
}

// ==================== LOGO UPLOAD ====================
const logoPlaceholder = document.getElementById('logoPlaceholder')
const logoInput = document.getElementById('logoInput')

logoPlaceholder.addEventListener('click', () => {
  logoInput.click()
})

logoInput.addEventListener('change', (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      logoPlaceholder.innerHTML = `<img src="${e.target.result}" alt="Brand logo" style="width: 100%; height: 100%; object-fit: contain; padding: 10px;">`
    }
    reader.readAsDataURL(file)
  }
})

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