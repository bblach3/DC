
# count = 0


# def incrementCount():
#     global count
#     count += 1
#     return count


# def increment():
# result = incrementCount()

# print(result)

# result = incrementCount()

# print(result)

########################################

# class Counter():
#     def __init__(self):
#         self.count = 0

#     def increment(self):
#         self.count += 1
#         return self.count

# count1 = Counter()

# print("count1: ", count1.increment())
# print("count1: ", count1.increment())
# print("count1: ", count1.increment())
# print("count1: ", count1.increment())

# print("instance variable for count 1: ", count1.count)

# count2 = Counter()
# print("count2: ", count2.increment())


# class Button():

#     FontWeight = 'bold'
#     FontColor = 'red'

#     def __init__(self, color, height, width):
#         self.count = 0
#         self.color = color
#         self.height = height
#         self.width = width

#     def click(self):
#         self.count += 1

#     @classmethod
#     def popUp(cls):
#         print('popups are so annoying')

# navButton = Button('green', '100px', '200px')
# helpButton = Button('yellow', '50px', '25px')

# print(Button.FontWeight)

# navButton.popUp()
# helpButton.popUp()


# print(navButton.FontWeight)
# print(helpButton.FontWeight)

# navButton.click()
# navButton.click()
# navButton.click()
# navButton.click()

# #print(f'nav: {navButton.count} help: {helpButton.count}')

# helpButton.click()
# helpButton.click()
# helpButton.click()
# helpButton.click()
# helpButton.click()
# helpButton.click()
# helpButton.click()


# #print(f'nav: {navButton.count} help: {helpButton.count}')




# class GoogleMapsAPI:

#     def __init__(self, address1, address2):

#         self.address1 = address1
#         self.address2 = address2

#     def map(self):
#         pass


#     def determineLat(self):
#         pass

#     def determineLong(self):
#         pass



# class CrazyString(str):
#     def __init__(self, word):
#         self.word = word

#     def reverse(self):
#         revString = ''

#         for char in self.word:
#             revString = char + revString

#         return revString


# kanye = CrazyString('west')

# print(kanye.capitalize())

# print(kanye.reverse())


# class Car:
#     def __init__(self, make, model, color):
#         self.make = make
#         self.model = model
#         self.color = color

#     def carDetails(self):
#         print(f"{self.make} {self.model} {self.color}")

# class Hybrid(Car):

#     def __init__(self, typeOfCar):
#         self.typeOfCar = typeOfCar
#         super(Hybrid, self).__init__(make, model, color)

#     def carType(self):
#         print("I'm a hybrid car")

#     def carDetails(self):
#         print("I'm in a hybrid")
#         super(Hybrid, self). carDetails()
#         print("after the hybrid class")

# class Electric(Car):

#     def carType(self):
#         print("I'm an electric car")


# # car = Car("ford", "mustang", "green")
# # car.carDetails()
# # hybrid = Hybrid("toyota", "prius", "marble")
# hybrid = Hybrid("hybrid", "toyota", "prius", "marble")
# hybrid.carDetails()

# class Car:
#     def __init__(self, make, model, color):
#         self.make = make 
#         self.model = model
#         self.color = color 
#     def carDetails(self):
#         print(f"{self.make} {self.model} {self.color}")
# class Hybrid(Car):
#     def __init__(self, typeOfCar, make, model, color):
#         self.typeOfCar = typeOfCar
#         super(Hybrid, self).__init__(make, model, color)
#     def carType(self):
#         print("I'm a hybrid car")
#     def carDetails(self):
#         print("I'm in the hybrid class")
#         super(Hybrid, self).carDetails()
#         print("after the hybrid class")
# class Electric(Car):
#     def __init__(self, make, model, color):
#         super(Electric, self).__init__(make, model, color)
#     def carType(self):
#         print("I'm an electric car")
# # car = Car("ford", "mustang", "green")
# # car.carDetails()
# # hybrid = Hybrid("toyota", "prius", "marble")
# hybrid = Hybrid("hybrid", "toyota", "prius", "marble")
# hybrid.carDetails()
# electric = Electric("tesla", "model-s", "gray")






RPG:

class characters:
    def __init__(self, name, health, power):
        self.name = name
        self.health = health


    def alive(self):
            if self.health > 0:
                return True
            else:
                return False



class Hero(characters):
    def __init__(self, health, power):
        self.health = health
        self.power = power

    def attack(self, enemy):
        enemy.health -= self.power
        print("You do {} damage to the goblin.".format(self.power))
        if self.health <= 0:
            print("You are dead.")
        if enemy.health <= 0:
            print("You killed the goblin")
    
    def print_status(self):
        print("You have {} health and {} power.".format(self.health, self.power))



class Goblin(characters):
    def __init__(self, health, power):
        self.health = health
        self.power = power
    
    def attack(self, enemy):
        enemy.health -= self.power
        print("The goblin does {} damage to you.".format(self.power))
        if self.health <= 0:
            print("The goblin is dead.")
        if enemy.health <= 0:
            print("You are dead!")
                
    def print_status(self):
        print("The goblin has {} health and {} power.".format(self.health, self.power))
        #print("The goblin is dead.")

class Zombie(characters):
    def __init__(self, health, power):
        self.health = health
        self.power = power
    
    def attack(self, enemy):
        enemy.health -= self.power
        print("The Zombie does {} damage to you.".format(self.power))
        if self.health <= 0:
            print("The goblin is dead.")
        if enemy.health <= 0:
            print("You are dead!")

    def power
                
    def print_status(self):
        print("The zombie has {} health and {} power.".format(self.health, self.power))
        #print("The goblin is dead.")




def main():
    hero = Hero(10, 5)
    goblin = Goblin(6, 2)
    Zombie = Zombie(2, 2)

    while goblin.alive() and hero.alive():
        goblin.print_status()
        hero.print_status() 
        zombie.print_status()
        print()
        print("What do you want to do?")
        print("1. fight goblin")
        print("2. do nothing (goblin fights you)")
        print("3. flee")
        print("> ", end=' ')
        raw_input = input()
        if raw_input == "1":
            #Hero attacks goblin
            hero.attack(goblin)
        elif raw_input == "2":
            goblin.attack(hero)
        elif raw_input == "3":
            print("Goodbye.")
            break
        else:
            print("Invalid input {}".format(raw_input))

        #if goblin.health > 0:
            # Goblin attacks hero
            #hero.health -= goblin.power
           
            #print("The goblin does {} damage to you.".format(goblin.power))
            
            # if hero.health <= 0:
                #print("You are dead.")
             

main()
















































