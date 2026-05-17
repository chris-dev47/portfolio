const multiplication = (a, b) => a * b
console.log(multiplication(5, 3))

const nom = "Chris"
const objectif = "Devenir développeur"
console.log(`Bonjour, je m'appelle ${nom} et mon objectif est de ${objectif}.`)

const dev = {
  nom: "Chris",
  ville: "Douala",
  langage: "Python"
}


const { nom: nomDev, ville, langage } = dev
console.log(nomDev, ville, langage)

// Simule une attente (comme internet)
const attendreDesDonnees = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Voici tes données !")
    }, 2000)
  })
}

// Async/Await — attend proprement
const main = async () => {
  console.log("1. Je demande les données...")
  const donnees = await attendreDesDonnees()
  console.log("2. J'ai reçu :", donnees)
  console.log("3. Je continue")
}

main()
const recupererDonnees = async () => {
  console.log("Récupération des données...")
  
  const reponse = await fetch("https://jsonplaceholder.typicode.com/users/1")
  const donnees = await reponse.json()
  
  console.log("Nom :", donnees.name)
  console.log("Email :", donnees.email)
  console.log("Ville :", donnees.address.city)
}

recupererDonnees()