

s = int(input('Input rows of triangle: '))
count = 1

while count <= s:
    print(('*' * count).center(s))
    count += 2
