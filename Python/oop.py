
def greeting(name):
    print(f"Hello {name}")



#DIRs

chris = {
    "firstName": "Chris",
    "lastName": "Owens",
    "greeting": greeting
}

matt = {
        "firstName": "Matt",
        "lastName": "Fisher",
        "greeting": greeting
}

print(chris["firstName"], chris["lastName"])

chris["greeting"]("Veronica")
