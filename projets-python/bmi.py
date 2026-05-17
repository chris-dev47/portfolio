def calculer_bmi(poids, taille):
    bmi = poids / (taille ** 2)
    return bmi

poids = float(input("Ton poids en kg : "))
taille = float(input("Ta taille en mètres : "))

resultat = calculer_bmi(poids, taille)

print("Ton BMI :", round(resultat, 2))

if resultat < 18.5:
    print("Insuffisant")
elif resultat < 25:
    print("Normal")
elif resultat < 30:
    print("Surpoids")
else:
    print("Obésité")