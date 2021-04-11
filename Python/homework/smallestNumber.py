def smallest(userlist):
    #smallest = min(userlist)  
    min = userlist[0]
    for number in userlist:
        if number < min:
            min = number
    return min
    

userlist = []
try:
    num = int(input("How many numbers are you going to enter? "))
    print("\n")
    if num <= 0:
        raise ValueError
except ValueError:
        print("Oops! That was not a proper value. Enter a number that's greater than 0")

for i in range(0, num):
    print('Enter the number at index', i, )
    number = int(input())
    userlist.append(number)

print(f'You entered: {userlist}')
print("\n")

result = smallest(userlist)

print(f'The smallest number you entered is: \'{result}\'')
print("\n")


