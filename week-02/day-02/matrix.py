# - Create (dynamically) a two dimensional list
#   with the following matrix. Use a loop!
#
#   1 0 0 0
#   0 1 0 0
#   0 0 1 0
#   0 0 0 1
#
# - Print this two dimensional list to the output

matrix = []

for i in range(4):
    matrix.append([])
    for j in range(4):
        if i == j:
            matrix[i].append(1)
        else:
             matrix[i].append(0)

print(matrix)