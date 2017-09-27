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

    def count_letters(self, word):
        out = {}
        if word:
            for letter in word:
                if not letter in out:
                    out[letter] = 1
                else:
                    out[letter] += 1
        return out