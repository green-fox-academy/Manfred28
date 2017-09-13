# Create a function that prints the ingredient list of dictionaries to the console in the following format:
#
# +--------------------+---------------+----------+
# | Ingredient         | Needs cooling | In stock |
# +--------------------+---------------+----------+
# | vodka              | Yes           | 1        |
# | coffee_liqueur     | Yes           | -        |
# | fresh_cream        | Yes           | 1        |
# | captain_morgan_rum | Yes           | 2        |
# | mint_leaves        | No            | -        |
# +--------------------+---------------+----------+
#
# The frist columns should be automatically as wide as the longest key

ingredients = [
	{ 'vodka': 1, 'needs_cooling': True },
	{ 'coffee_liqueur': 0, 'needs_cooling': True },
	{ 'fresh_cream': 1, 'needs_cooling': True },
	{ 'captain_morgan_rum': 2, 'needs_cooling': True },
	{ 'mint_leaves': 0, 'needs_cooling': False },
	{ 'sugar': 100, 'needs_cooling': False },
	{ 'lime juice': 10, 'needs_cooling': True },
	{ 'soda': 100, 'needs_cooling': True }
]

def print_section_separator():
    print("+--------------------+---------------+----------+")

def print_first_line():
    print("| Ingredient" + " " * (col_widths[0] - len("Ingredient")) + "|" + 
    " Needs cooling " + "|" + " In stock " + "|")

def print_ingredients():
    for ing in ingredients:
        ingredient = ""
        cooling = "Yes" if ing["needs_cooling"] else "No"
        stock = 0
        col1_offset = ""
        col2_offset = col_widths[1] - len(cooling)
        col3_offset = 0
        for keys in ing.keys():
            if not keys == "needs_cooling":
                ingredient = keys
                col1_offset = col_widths[0] - len(ingredient)
                stock = ing[ingredient]
                col3_offset = col_widths[2] - len(str(stock))

        print("| " + ingredient +  " " * col1_offset  + "| " + 
        cooling + " " * col2_offset + "| " + str(stock) + " " * col3_offset + "|")

def get_col_widths():
    col1 = 0
    col2 = len("Needs cooling") + 1
    col3 = len("In stock") + 1

    for item in ingredients:
        for key in item.keys():
            if len(key) > col1:
                col1 = len(key) + 1
    
    return [col1, col2, col3]


col_widths = get_col_widths()

print_section_separator()
print_first_line()
print_section_separator()
print_ingredients()
print_section_separator()
