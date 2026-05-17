const http = require('http')

const serveur = http.createServer((requete, reponse) => {
  reponse.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
  
  if (requete.url === '/') {
    reponse.end('<h1>Accueil</h1><a href="/about">À propos</a>')
  } 
  else if (requete.url === '/about') {
    reponse.end('<h1>Je suis Chris</h1><p>Développeur en formation</p><a href="/">Retour</a>')
  }
  else {
    reponse.end('<h1>404 - Page introuvable</h1><a href="/">Retour</a>')
  }
})

serveur.listen(3000, () => {
  console.log("✅ Serveur démarré sur http://localhost:3000")
})