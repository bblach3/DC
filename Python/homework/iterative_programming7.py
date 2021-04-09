text = "lbh zhfg hayrnea jung lbh unir yrnearq"
#c=(text-n)%26
result = ""

#text = input("Enter the text: ")
shift = int(input("Enter a shift key from 1 to 26 to find the decoded message: "))

for char in text:
    if char==' ':
        result = result + char
    elif char.isupper():
        result=result+chr((ord(char)+shift-65)%26+65)
    else:
        result=result+chr((ord(char)-shift-97)%26+97)
        # i = 0
        # while i <=26:
        #     result=result+chr((ord(char)-i-97)%26+97) 
        #     i += 1

print(result)
#decoded message is "you must unlearn what you have learned" shift#13