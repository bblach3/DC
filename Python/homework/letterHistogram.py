letters = {}

word = input("Please enter a word: ")

key = 0

for key in word:
    if key in letters:
        letters[key] += 1
    else:
        letters[key] = 1


print(letters)
