from domino import Domino

def initialize_dominoes():
    dominoes = []
    dominoes.append(Domino(5, 2))
    dominoes.append(Domino(4, 6))
    dominoes.append(Domino(1, 5))
    dominoes.append(Domino(6, 7))
    dominoes.append(Domino(2 ,4))
    dominoes.append(Domino(7, 1))
    return dominoes


def order_dominoes(dominoes):
    last_domino = dominoes[0].values[1]
    ordered_dominoes = [dominoes[0]]
    while not len(ordered_dominoes) == len(dominoes):
        for domino in dominoes:
            if domino.values[0] == last_domino:
                ordered_dominoes.append(domino)
                last_domino = domino.values[1]
    return ordered_dominoes

dominoes = initialize_dominoes()
# You have the list of Dominoes
# Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides
# eg: [2, 4], [4, 3], [3, 5] ...

print(dominoes)
print(order_dominoes(dominoes))