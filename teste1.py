def verificaMaiorNumero(num1, num2, num3):
    if num1 > num2 and num1 > num3:
        maior = num1
    elif num2 > num1 and num2 > num3:
        maior = num2
    else:
        maior = num3

    print("O maior número é:", maior)

num1 = float(input("Digite o número 1: "))
num2 = float(input("Digite o número 2: "))
num3 = float(input("Digite o número 3:: "))

verificaMaiorNumero(num1, num2, num3)
