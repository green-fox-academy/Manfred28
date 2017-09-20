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
    print("+" + "-" * (col_widths[0] + 1) + 
        "+" + "-" * (col_widths[1] + 1) + 
        "+" + "-" * (col_widths[2] + 1) + "+")

def print_first_line():
    print("| Ingredient" + " " * (col_widths[0] - len("Ingredient")) + "|" + 
    " Needs cooling " + "|" + " In stock " + "|")

def print_ingredients():
    for ingredient in ingredients:
        ingredient_name, cooling, stock = get_ingredient_info(ingredient)
        col1_offset, col2_offset, col3_offset = get_offsets(ingredient_name, cooling, stock)
        print("| " +
            ingredient_name + col1_offset + 
            cooling + col2_offset + 
            str(stock) + col3_offset)


def get_ingredient_info(ingredient):
    for key in ingredient:
        if not key == "needs_cooling":
            ingredient_name = key
            needs_cooling = "Yes" if ingredient["needs_cooling"] else "No"
            stock = str(ingredient[key]) if ingredient[key] else "-"
        return ingredient_name, needs_cooling, stock


def get_offsets(ingredient, cooling, stock):
    col1_offset = " " * (col_widths[0] - len(ingredient)) + "| "
    col2_offset = " " * (col_widths[1] - len(cooling)) + "| "
    col3_offset = " " * (col_widths[2] - len(stock)) + "|"
    return col1_offset, col2_offset, col3_offset


def get_col_widths():
    col1 = 0
    col2 = len(" Needs cooling")
    col3 = len(" In stock")

    for item in ingredients:
        key = list(item.keys())[0]
        if len(key) > col1:
            col1 = len(key) + 1 # +1 forthe space before the word
    return [col1, col2, col3]


col_widths = get_col_widths()

print_section_separator()
print_first_line()
print_section_separator()
print_ingredients()
print_section_separator()
