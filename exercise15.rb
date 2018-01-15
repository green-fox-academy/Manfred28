def splitToTwoChars string
  array_of_strings = []
  (1..string.length).step(2) do |i|
    array_of_strings.push([]) if i.odd?
    array_of_strings[-1].push(string[i - 1] + string[i])
  end
  array_of_strings
end

string = "abcdef"
p splitToTwoChars(string)
