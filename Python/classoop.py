

# class DIR:
#     def __init__(self,fName, lName):
#         self.firstName = fName
#         self.lastName = lName

#     def greeting(self, name):
#         print(f'{self.firstName} says hello to {name}')


# chris = DIR("Chris", "Owen")
# matt = DIR("Matt", "Fisher")


# chris.greeting("Matt")

# matt.greeting("Chris")



class Person: 
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone

    def greet(self, other_person):
        #print(f'Hello {other_person}, I am {self.name}!')
        print('Hello {}, I am {}!'.format(other_person.name, self.name))
        print(f'{self.name}\'s email is {self.email} and his phone number is {self.phone}\n')

sonny = Person('Sonny', 'sonny@hotmail.com', '483-485-4948')
jordan = Person('Jordan', 'jordan@aol.com', '495-586-3456')

sonny.greet(jordan)
jordan.greet(sonny)

