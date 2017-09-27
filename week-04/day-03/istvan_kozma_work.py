class MyObject(object):
    def get_apple(self):
        return "appl"

    def sum_numbers(self, num_list):
        if num_list:
            number_sum = 0
            for num in num_list:
                number_sum += num
            return number_sum
        return

    def palindrome_checker(self, word):
        if word:
            return word == word[::-1]
        return

    def anagram_checker(self, word1, word2):
        if word1 == "" and word2 == "":
            return True
        if word1 and word2:
            return sorted(word1)== sorted(word2)

    def count_letters(self, word):
        out = {}
        if word:
            for letter in word:
                if not letter in out:
                    out[letter] = 1
                else:
                    out[letter] += 1
        return out

    def fibonacci(self, fibonacci_index):
        if fibonacci_index == 0:
            return None
        if fibonacci_index <= 2:
            return 1
        return self.fibonacci(fibonacci_index - 1) + self.fibonacci(fibonacci_index - 2)
