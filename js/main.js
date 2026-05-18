// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, { threshold: 0.1 })

document.querySelectorAll('section').forEach(section => {
  observer.observe(section)
})

// Progress bars animation
const animateProgressBars = () => {
  document.querySelectorAll('.progress-bar').forEach(bar => {
    const width = bar.getAttribute('data-width')
    bar.style.width = width + '%'
  })
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav')
  if (window.scrollY > 50) {
    nav.style.backgroundColor = '#16213e'
    nav.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.2)'
  } else {
    nav.style.backgroundColor = '#0f0f1a'
    nav.style.boxShadow = 'none'
  }
})

// Animate on load
window.addEventListener('load', () => {
  setTimeout(animateProgressBars, 500)
})