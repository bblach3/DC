letters = {}

#def letterHistogram():
    #letters = {}

word = input("Please enter a word: ")
key = 0
for key in word:
    if key in letters:
        letters[key] += 1
    else:
        letters[key] = 1

#print(letters)
#print("The top three words are: ")
sorted_values = sorted(letters.values())
sorted = {}

for i in sorted_values:
    for j in letters.keys():
        if letters[j] == i:
            sorted[j] = letters[j]
            #break
print(sorted)

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
#for l in enumerate(letters):
    #print(f"{index + 1} {name} {phonebook[name]}")
    

