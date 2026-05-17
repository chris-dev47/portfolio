def addition(a, b):
    return a + b

def soustraction(a, b):
    return a - b

def multiplication(a, b):
    return a * b

def division(a, b):
    if b != 0:
        return a / b
    else:
        return "Erreur : division par zéro impossible"

nombre1 = float(input("Entrez nombre 1 : "))
nombre2 = float(input("Entrez nombre 2 : "))
operation = input("Opération (+, -, *, /) : ")

if operation == "+":
    print("Résultat :", addition(nombre1, nombre2))
elif operation == "-":
    print("Résultat :", soustraction(nombre1, nombre2))
elif operation == "*":
    print("Résultat :", multiplication(nombre1, nombre2))
elif operation == "/":
    print("Résultat :", division(nombre1, nombre2))
else:
    print("Opération non valide")