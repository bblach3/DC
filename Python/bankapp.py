

class AccountHolder:
    def __init__(self, fName, lName, accountType, balance): #stats?????????
        self.fName = fName
        self.lName = lName
        self.accountType = accountType
        self.balance = balance

    def deposit(self):
        self.deposit = deposit

class Bank:
    def __init__(self, name, address):
        self.name = name
        self.address = address
        self.account = [] #holds all of our accounts , can use {} instead (objects)
            #put stuff here

    def open_new_account(self, fName, lName, accountType, balance): #stats???
        new_account = (fName, lName, accountType, balance) 
        self.account.append(new_account)
        #create new Account Holder
        #store new account inside of self.accounts

    def show_account_holder(self):
        # show detailed account information for specific account folder
        pass
    
    def show_account(self):
        # print all acounts holders
        for customerObj in self.account:
            print(f"Name: {customerObj.fName} {customerObj.lName}\n Acccount type: {customerObj.accountType}\n Balance: {customerObj.balance}")
    
    def show_bank_balance(self):
        #show bank balance of entire bank
        pass


c1 = AccountHolder("Mike", "Rowski", "Checking", "$2,000")

account = Bank("Chase", "123 Setmefree St., Chicago Il 60601")
#account.open_new_account(c1)
account.open_new_account("Mike", "Rowski", "Checking", "$2,000")

account.show_account()

