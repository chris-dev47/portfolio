contacts = []

while True:
    print("\n--- RÉPERTOIRE ---")
    print("1. Ajouter un contact")
    print("2. Afficher tous les contacts")
    print("3. Quitter")
    print("4. Supprimer un contact !")

    choix = input("Ton choix : ")

    if choix == "1":
        nom = input("Nom : ")
        telephone = input("Téléphone : ")
        ville = input("Ville : ")
        contacts.append({"nom": nom, "telephone": telephone, "ville": ville})
        print("✅ Contact ajouté !")

    elif choix == "2":
        if len(contacts) == 0:
            print("Aucun contact pour l'instant.")
        else:
            for contact in contacts:
                print(contact["nom"], "-", contact["telephone"], "-", contact["ville"])

    elif choix == "3":
        with open("contacts.txt", "w") as fichier:
            for contact in contacts:
                ligne = contact["nom"] + " - " + contact["telephone"] + " - " + contact["ville"] + "\n"
                fichier.write(ligne)
        print("✅ Contacts sauvegardés. Au revoir !")
        break

    elif choix == "4":
        nom_a_supprimer = input("Nom du contact à supprimer : ")
        contacts = [contact for contact in contacts if contact["nom"] != nom_a_supprimer]
        print("✅ Contact supprimé !")