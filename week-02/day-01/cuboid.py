# Write a program that stores 3 sides of a cuboid as variables (doubles)
# The program should write the surface area and volume of the cuboid like:
# 
# Surface Area: 600
# Volume: 1000


def cuboid_surface_area (width, length, height):
    return 2 * width * length + 2 * width * height + 2 * length * height

def cuboid_volume(width, length, height):
    return width * length * height

print("Surface Area: " + str(cuboid_surface_area(100, 200, 300)))
print("Volume: " + str(cuboid_volume(100, 200, 300)))