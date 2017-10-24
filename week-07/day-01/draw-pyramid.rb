# // Write a program that draws a
# // pyramid like this:
# //
# //
# //    *
# //   ***
# //  *****
# // *******
# //
# // The pyramid should have as many lines as lineCount is


LINE_COUNT = 5;

LINE_COUNT.downto(0) do |space_count|
    star_count = ( LINE_COUNT - space_count ) * 2 
    puts " " * space_count + "*" * ( star_count == 0 ? star_count : star_count - 1 )
end
