# When saving this quote a disk error has occured. Please fix it.
# Add "always takes longer than" between the words "It" and "you"

quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."
lastindex = quote.find("It") + 2
quote = quote[:lastindex] + " always takes longer than" + quote[lastindex:]

print(quote)