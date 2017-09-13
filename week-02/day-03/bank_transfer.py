accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

# Create function that returns the name and balance of cash on an account

# Create function that transfers an amount of cash from one account to another
# it should have three parameters:
#  - from account_number
#  - to account_number
#  - amount to transfer
#
# Print "404 - account not found" if any of the account numbers don't exist

def client_info(account_number):
    if is_existing_account(account_number):
        for client in accounts:
            if client["account_number"] == account_number:
                print("name: " + client["client_name"] + "| balance: " + str(client["balance"]))

def transfer_amount(source, destination, amount):
    if is_existing_account(source) and is_existing_account(destination):
        if verify_transfer_amount(source, amount):
            move_money(source, destination, amount)
        else:
            print("Not enough Credits")
    else:
        print("404 - account not found")

def is_existing_account(account_number):
    for client in accounts:
        if account_number in client.values():
            return True
    return False

def verify_transfer_amount(source, amount):
    for client in accounts:
        if client["account_number"] == source:
            if client["balance"] >= amount:
                return True
    return False


def move_money(source, destination, amount):
    for client in accounts:
        if client["account_number"] == source:
            client["balance"] -= amount
        elif client["account_number"] == destination:
            client["balance"] += amount

client_info(23456311)
transfer_amount(23456311, 43546731, 135360.0)

