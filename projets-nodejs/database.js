const Database = require('better-sqlite3')

const db = new Database('mabase.db')

db.exec(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT,
    telephone TEXT,
    ville TEXT
  )
`)

console.log("✅ Base de données créée !")

const ajouter = db.prepare('INSERT INTO contacts (nom, telephone, ville) VALUES (?, ?, ?)')

ajouter.run('Chris', '656075500', 'Douala')
ajouter.run('Papa', '677747666', 'Douala')
ajouter.run('Lili', '690292492', 'Douala')

console.log("✅ Contacts ajoutés !")

const contacts = db.prepare('SELECT * FROM contacts').all()

console.log("\n--- Mes Contacts ---")
for (const contact of contacts) {
  console.log(contact.id, "-", contact.nom, "-", contact.telephone, "-", contact.ville)
}