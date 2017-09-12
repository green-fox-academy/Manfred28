# - Create a variable named `nimals`
#   with the following content: `["kuty", "macs", "cic"]`
# - Add all elements an `"a"` at the end

nimals = ["kuty", "macsk", "cic"]
def append_a(input_list):
    for i in range(len(input_list)):
        input_list[i] += "a"
    return input_list

append_a(nimals)
print(nimals)