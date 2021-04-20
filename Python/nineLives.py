
import random

lives = 9
words = ["pizza", "fairy", "shirt", "plane", "javascript"]
# test = "hello"
# x = test.count("l")

# print(x)
a
secret_word = random.choice(words)
#guess = '_ ' * len(secret_word)  
clue = []
for x in secret_word:
    clue.append('_ ') #_ _ _ _ _ pizza

def update_clue(guessed_letter):
    index = 0
    while index < len(secret_word):
        if guessed_letter == secret_word[index]:
            clue[index] = guessed_letter
        index += 1


# while lives > 0:
#     print(guess)
    print(f'You have {lives} lives.')
    letter = input("Enter a letter or the whole word: ")

if clue in secret_word:
    update_clue(clue)

else:
        print('Incorrect. You lose a life')
        lives -= 1
#     while count < len(secret_word):
#         count = 0
#         letter = 0
#         if str(letter) not in secret_word:
#             lives -= 1
            
#         elif str(letter) in secret_word:
#             print(letter)
#         count += 1


#check to see if the char is in word
#true: need to see the word with their guess
#if the word has been guessed, then exit out of while loop
#false:
    # decrement lives

#for index in secret_word:
#   guess.append  
#if guess in secret_word
    #function
    #take guess, secret, clue

