const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1>Accueil</h1><a href="/about">À propos</a>')
})

app.get('/about', (req, res) => {
  res.send('<h1>Je suis Chris</h1><p>Développeur en formation</p><a href="/">Retour</a>')
})

app.get('/projets', (req, res) => {
  res.send('<h1>Mes Projets</h1><p>Calculatrice, Répertoire, BMI</p><a href="/">Retour</a>')
})

app.listen(3000, () => {
  console.log("✅ Serveur Express démarré sur http://localhost:3000")
})