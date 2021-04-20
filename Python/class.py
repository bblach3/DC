# listA = [1, 2, 3, 5]

# listB = listA

# listB[1] = 99

# print(listA)
# print(listB)


# arr = [[1, 2], [3, 4], [4,5], [7, 8]]

# arr[1]
# print(arr[3][0])



# tic_tac_toe = ["", "", "", "", "", "", "", "", ""]

# board = [ ["X", "X", "O"],
#          ["X", "O", "O"], 
#          ["X", "", "O"]
#         ]





# board[0] #["", "X", ""] =
# print(board[1][1])
# board[0][2]

# board[1] # ["", "O", ""]
# board[1][1]

# greeting = "Hello World"

# greet = ["h", "e", "l", "l", "o"]
# greet[1]  #e

alphabet = "abcdefghijklmnopqrstuvwxyz"

# index = 0
# while index < len(alphabet): # stops at 25 < 26
#     print(alphabet[index])
#     index += 1

# print(alphabet)

# alphList = list(alphabet)

# print(alphList)

# alphList[1] = 'z'

# print(alphList)


# constants = (3.14, 2.71)
# print(constants[0])


# myList = range(3, 12, 3) 

# print(list(myList))

# name = "Bogdan Blach"
# rng = range(10, 20, 2)

# for char in rng :
#     print(char)

#arr = [4, 2, 5, 7, 23, 6, 5]

# sum = 0

# for val in arr:
#     sum = sum + val

# print(sum)
# sum = 0

# for i in arr:
#     if sum < i:
#         sum = i

# print(sum)

# large = arr[0]

# for i in arr:
#     if i < large:
#         large = i

# print(large)        

# count = 0
# for i in arr:
#     if (i % 2 ) == 0:
#         print(i)

# evens = []
# for i in arr:
# if i % 2 == 0:
#     even.append(i)
# print(evens)


# m = 4
# arr = [4, 2, 5, 7, 23, 6, 5]
# newList = []

# for i in arr:
#     newList.append(i*4)
# print(newList)

# name = "Veronica"

# rev_name = ""

# for c in name:

#     rev_name = c + rev_name  # reV

# print(rev_name)

#num = -9854

# 1 number
# sign -1 1
# cast int => SyntaxWarningreverse string 4589
# cast str => int
# int * sign 
# sign = 1 

# if num < 0:
#     sign = -1

# absNum = abs(num) #9854 -> 4589

# numStr = str(absNum) # "9854"

# rev_num_str = ""

# for c in numStr:
#     rev_num_str = c + rev_num_str # 4589

# result = sign * int(rev_num_str)

# print(result)

# count = 1
# while count <= 10:
#     n = 1
#     while n <= 10:
#         print(count, "X", n, "=", count * n)
#         n += 1
#     count += 1 

# count += 1


# for minutes in range(1,5):
#     print(f'minutes {minutes}')
#     for seconds in range(1, 3):
#         print(seconds) # for range (1,10) prints 100 items(10 outer loops * 10 inner loops)

# for count in range(1, 11):
#     for n in range(1, 11):
#         total = count * n
#         print(f'{count} X {n} = {total}')
    

# names = ["Q", "Jose", "Brandon", "Carol", "Jacob", "Jason"]

# for name in names:
#     if(name == "Destiny"):
#         print('found')

# #FirstDictionary = {key: value}

# names = {
#     "Q" : "Atlanta",
#     "Jose": "Atlanta",
#     "Brandon": "Dallas",
#     "Carol": "Atlanta",
#     "Jacob": "Tampa",
#     "Jason": "Nashville"

# }


# items = names.items()

# for key, value in names.items():



# print(items)


#print(result)


# names["Brandon"] = "Houston"


# #del names["Veronica"]
# names["Veronica"] = "Houston"

# nameList = names.keys()

# valueList = names.values()
# print(valueList)



# my_dictionary = {
#     "hello" :   "world",
#     "sqareOfTwo" : 4,
#     "theMeaningOfLife" : 42,
#     0 : 1
# }

# contact = [
#     {
#         'first_name': 'Phillip',
#         'last_name': 'Guo',
#         'email': 'phillip.guo@gmail.com',
#         'phone':{
#             'work':'837-494-3948',
#             'cell': '234-897-4933'
#         }
#     },
#     {
#         'first_name': 'Mark',
#         'last_name': 'Guzdial',
#         'email': 'mark.guzdial@gatech.edu',
#         'phone':{
#             'work':'484-569-3466',
#             'cell': '493-485-9845'
#         }
#     }
# ]

# print(contact[0]['phone']['work'])

letters = {}

#alphabet = "abcdefghijklmnopqrstuvqxyz"

word = input("Please entere a word: ")
count = 0
key = 0
#for key in alphabet:
for key in word:
    count += 1
    letters[key] = count

print(letters)

topThree = []

for key, value in letters.items():
    pair = {"word": key, "count:" value}
    index = 0
    for i in range(len(topThree)):
        if (value > topThree[i]['count'])
            index = i
            break
        index = i + 1

    topThree.insert(index, pair)

print(topThree)

# names["Veronica"] = "Houston"

# nameList = names.keys()

# valueList = names.values()
# print(valueList)