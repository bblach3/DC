

#message = "You have " + "%.d" % count +" coins." 
message = "You have 0 coins." 
count = 0
print(message)
#response = input("Do you want another? ")

while count > -1:
    response = input("Do you want another? ")
    response = response.lower()
    if response == "yes":
        #response = response.lower()
        count += 1
        print("You have " + "%.d" % count +" coins." )
    else:
        print("Bye")
        break







