width = int(input("Width? "))
height = int(input("Height? "))
a = "*"
b = " "

count = 0
while count <= height:
    
    if count == 0 or count == height:
        print(width * a)
    else:
        print(a + ((" " * ((width - 2)) + a)))  
    count += 1




#square
# s = int(input('input size of square: '))
# count = 1
# while count <= s
#     print('*' * s)
#     count =+1





