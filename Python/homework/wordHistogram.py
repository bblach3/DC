wordcount = {}

sentence = input("Please enter a string of words (or a sentence): ")

word = 0

sentence = sentence.split()
for word in sentence:
    if word in wordcount:
        wordcount[word] += 1
    else:
        wordcount[word] = 1


print(wordcount)