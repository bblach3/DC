bill = float(input("Total bill amount? "))
service = input("Level of service? (good/fair/bad): ")
good = bill * 0.20
fair = bill * 0.15
bad = bill * 0.10
split = int(input("Split how many ways? "))
if service == "good":
        print("Tip amount: $"  "%.2f" % good)
        print("Total amount: $"  "%.2f" % (bill + good))
        print("Amount per person: $" +  "%.2f" % ((bill + good)/split))       
elif service == "fair":
        print("Tip amount: $"  "%.2f" % fair)
        print("Total amount: $"  "%.2f" % (bill + fair))
        print("Amount per person: $"  "%.2f" % ((bill + fair)/split))
elif service == "bad":
        print("Tip amount: $"  "%.2f" % bad)
        print("Total amount: $"  "%.2f" % (bill + bad))
        print("Amount per person: $"  "%.2f" % ((bill + bad)/split))
else:
        print("No soup for you! Come back 1 year!\n")


    

