list = [1, 1, 1, 1, 3, 4, 5, 12, 12, 45, 77, 77, 77]
newList = []

for i in list:
    if i not in newList:
        newList.append(i)


print(newList)