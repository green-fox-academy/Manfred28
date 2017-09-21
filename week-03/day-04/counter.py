
# Write a recursive function that takes one parameter: n and counts down from n.

def counter(num):
    if num < 0:
        return num
    print(num)
    return counter(num-1)

counter(10)