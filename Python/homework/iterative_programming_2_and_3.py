rows = int(input("Enter number of rows for both matrices: "))
col = int(input("Enter number of columns for both matrices: "))

print("Enter the numbers for the matrix 1: ")
matrix1 = [[int(input()) for i in range(col)] for j in range(rows)]
print("Matrix 1: ")
for i in range(rows):
    for j in range(col):
        print(format(matrix1[i][j],"3"), end="")
    print()

print("Enter the numbers for the matrix 2: ")
matrix2 = [[int(input()) for i in range(col)] for j in range(rows)]
print("Matrix 2: ")
for i in range(rows):
    for j in range(col):
        print(format(matrix2[i][j],"3"), end="")
    print()

result = [[0 for i in range(col)] for j in range(rows)]
for i in range(rows):
    for j in range(col):
        result[i][j] = matrix1[i][j] + matrix2[i][j]

print("Adding the two matrices results in: ")
for i in range(rows):
    for j in range(col):
        print(format(result[i][j],"3"), end="")      
    print()
