
#CRUD - create, read, update, delete
finished = 'y'
todoList = []

#add
def add():
    newTodo = input("Enter a new todo item: ")
    todoList.append(newTodo)

#displaying
def display():
    #for todoItem in todoList:
    for index, todoItem in enumerate(todoList):
        print(f"{index + 1} {todoItem}")
#updating
def update():
    index = int(input("Which item would you like to update?")) - 1
    updatedValue = input("What is your change?")
    print(f"Index: {index}")
    todoList[index] = updatedValue

#deleting
def delete():
    index = int(input("Which item would you like to delete?")) - 1
    del todoList["index"]

while finished == 'y':
    #menu
    print("what would you like to do?")
    userInput = input(f"""
    1. List todos
    2. Add a todo item
    3. Delete a todo item
    4. Update a todo item
    5. End the app
    """)

    choice = int(userInput)

    if choice == 1:
        display()
    elif choice == 2:
        add()
    elif choice == 3:
        delete()
    elif choice == 4:
        update()
    elif choice == 5:
        finished = 'n'
