// Animation au scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav')
  if (window.scrollY > 50) {
    nav.style.backgroundColor = '#16213e'
  } else {
    nav.style.backgroundColor = '#0f0f1a'
  }
})

// Animation des cartes au scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1'
      entry.target.style.transform = 'translateY(0)'
    }
  })
})

document.querySelectorAll('.card, .projet-card').forEach(card => {
  card.style.opacity = '0'
  card.style.transform = 'translateY(30px)'
  card.style.transition = 'all 0.5s ease'
  observer.observe(card)
})