# - Create a function called `printer`
#   which prints the input parameters
#   (can have multiple number of arguments)

def printer(*args):
    args = list(args)
    for item in args:
        print(item)




printer(1,2,3,4,"alma")