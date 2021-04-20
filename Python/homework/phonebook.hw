finished = 'y'
phonebook = {}

import pickle

# with open('phonebook.pickle', 'wb') as fh:
#         pickle.dump(phonebook, fh)

with open('phonebook.pickle', 'rb') as fh:
        phonebook = pickle.load(fh)

#look up an entry
def lookUp():
    name = input("Enter the name whose number you would like to look up: ")
    print("\n")
    if name in phonebook:
        print(f'Number for {name} is: {phonebook[name]}')
    else:
        print("Name not found. Please try again.")

#set an entry
def add():
    name = input("Enter the person's first name: ")
    number = input("Enter the person's phone number: ")
    phonebook[name] = number
    with open('phonebook.pickle', 'wb') as fh:
        pickle.dump(phonebook, fh)
    print(f'Entry stored for  {name}.')
    print(phonebook)
   


#deleting
def delete():
    name = input("Which name would you like to delete? ")
    print("\n")
    if name in phonebook:
        del phonebook[name]
        with open('phonebook.pickle', 'wb') as fh:
            pickle.dump(phonebook, fh)
        print(f'{name} was deleted.')
    else:            
        print("Name is not in the phonebook")


#displaying
def display():
    for index, name in enumerate(phonebook):
        print(f"{index + 1} {name} {phonebook[name]}")

    #
    #print(phonebook)


while finished == 'y':
    #menu
    #print("What would you like to do (1-5)? ")
    userInput = input(f"""
    Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit

What do you want to do (1-5)?
    """)

    choice = int(userInput)

    if choice == 1:
        lookUp()
    elif choice == 2:
        add()
    elif choice == 3:
        delete()
    elif choice == 4:
        display()
    elif choice == 5:
        finished = 'n'