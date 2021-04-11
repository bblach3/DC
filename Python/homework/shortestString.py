def shortest(userlist):
    minlen = 999
    for word in userlist:
        if len(word) < minlen:
            minlen = len(word)
            shortest = word
    return(shortest)


userlist = []

try:
        wordup = int(input("How many strings are you going to enter? "))
        print("\n")
        if wordup <= 0:
            raise ValueError
except ValueError:
            print("Oops! That was not a proper value. Enter a number that's greater than 0", "\n")

for i in range(0, wordup):
        print('Enter the string at index', i, )
        word = str(input())
        userlist.append(word)

print(f'You entered: {userlist}')
print("\n")

result = shortest(userlist)

print(f'The shortest string you entered is: \'{result}\'')
print("\n")
 
