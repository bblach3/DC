# file_handler = open('peabmle.txt', 'r')

# contents = file_handler.read()

# file_handler.close()

# print(contents)


# file_handler = open('newFile.txt', 'wb')

# contents = file_handler.write("\nhere is some new text in a new line")

# file_handler.close()

# print(contents)

# with open('DHop.txt', 'w') as file_handler:
#     contents = file_handler.write("Deandre Hopkins is the best receiver in NFL")

import pickle

# students = {
#     'Giselle': 'Las Vegas',
#     'Layne': 'Atlanta',
#     'Victoria': 'Humble'
# }

# with open('data.pickle', 'wb') as fh
# #     pickle.dump(students, fh)

with open('data.pickle', 'rb') as fh:
    students = pickle.load(fh)


print(students['Giselle'])