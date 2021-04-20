# class Campus:
#     def __init__(self):
#         self.students = [] # [student, studet, stud]
#     def addStudent(self, firstName, campus):
#         student = Student(firstName, campus)

#         self.students.append(student)
#     def showCurrentStudents(self):
#         for studentObj in self.students:
#             print(f"{studentObj.firstName} {studentObj.campus}")

    

# campus = Campus()
# campus.addStudent('Giselle','Las Vegas')
# campus.addStudent('Carol', 'Atlanta')
# campus.addStudent("Jacob", "Tampa")
# campus.addStudent("Victoria", "Houston")
# campus.addStudent("Brandon", "Dallas")
# campus.addStudent("Dot", "Auburn")
# campus.showCurrentStudents()

class Student:
    def __init__(self, firstName, campus):
        self.firstName = firstName 
        self.campus = campus 
    def print(self):
        print(f"{self.firstName} is locted in {self.campus}")
class Campus:
    def __init__(self):
        self.students = [] # [student, studet, stud]
    def addStudent(self, firstName, campus):
        student = Student(firstName, campus)
        self.students.append(student)
    def showCurrentStudents(self):
        for studentObj in self.students:
            print(f"{studentObj.firstName} {studentObj.campus}")

            
campus = Campus()
campus.addStudent('Giselle','Las Vegas')
campus.addStudent('Carol', 'Atlanta')
campus.addStudent("Jacob", "Tampa")
campus.addStudent("Victoria", "Houston")
campus.addStudent("Brandon", "Dallas")
campus.addStudent("Dot", "Auburn")