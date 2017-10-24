a = 3;
# // make it bigger by 10
a += 10
puts a




b = 100;
# // make it smaller by 7
b -= 7
puts b





c = 44;
# // double c's value
c *= 2
puts c




d = 125;
# // divide d's value by 5
d /= 5
puts d





e = 8;
# // what's the cube of e's value?
e **= 3
puts e




f1 = 123;
f2 = 345;
# // tell if f1 is bigger than f2 (as a boolean)
puts f1 > f2

g1 = 350;
g2 = 200;
# tell if the double of g2 is bigger than g1 (pras a boolean)
puts g2 * 2 > g1



h = 1357988018575474;
# // tell if h has 11 as a divisor (as a boolean)
puts h % 11 == 0




i1 = 10;
i2 = 3;
# // tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
puts (i1 > i2 ** 2 and i1 < i2 ** 3)



j = 1521;
# // tell if j is dividable by 3 or 5 (as a boolean)
puts (j % 3 == 0 or j % 5 == 0)



k = 'Apple';
# // fill the k able with its content 4 times
k *= 5
puts k
