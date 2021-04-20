list1 = [[2,2]], [5,3]]
list2 = [[4,7]], [5,2]]

list3 = [[0,0],[0,0]]


result1 = list1[0][0] + list2[0][0]
result2 = list1[1][0] + list2[1][0]
result3 = list1[0][1] + list2[0][1]
result4 = list1[1][1] + list2[1][1]

for outerIndex in range(2): #[0,1]
    print(list1[outerindex]) # list1[0] = [2,2]
    print(list2[oouterIndex]) # list2[0] = [4,7]
    for innerIndex in range(2) #[0,1]
        print(list1[outterIndex][innerIndex]) # list1[0][0] list1[0][1]
        print(list2[outterIndex][innerIndex]) # list2[0][0] list1[0][1]

        list3([outerIndex][innerIndex]) = list1[outerIndex][innerIndex]+
                                            list2[outerIndex][innerIndex]

#print(f'({resutl1} {result2} {result3} {result4}')'

