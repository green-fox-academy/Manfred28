# Create Sharpie class
# We should know about each sharpie their color (which should be a string), width (which will be a floating point number), ink_amount (another floating point number)
# When creating one, we need to specify the color and the width
# Every sharpie is created with a default 100 as ink_amount
# We can use() the sharpie objects
# which decreases inkAmount

class Sharpie(object):
    ink_amount = 100.0
    def __init__(self, color, width):
        self.color = color
        self.width = float(width)

    def use(self):
        self.ink_amount -= 1
