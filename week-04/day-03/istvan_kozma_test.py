import unittest
from istvan_kozma_work import MyObject

class MyObjectTests(unittest.TestCase):
    def setUp(self):
        self.object = MyObject()
    
    def test_apple_returns_apple_string(self):
        self.assertEqual(self.object.get_apple(), "appl")


    def test_sum_returns_None_if_empty_list(self):
        self.assertEqual(self.object.sum_numbers([]), None)

    def test_sum_returns_correct_value_with_one_number(self):
        self.assertEqual(self.object.sum_numbers([1]), 1)

    def test_sum_returns_correct_value_with_two_numbers(self):
        self.assertEqual(self.object.sum_numbers([1, 1]), 2)
        self.assertEqual(self.object.sum_numbers([10.1, 1.5]), 11.6)
        self.assertEqual(self.object.sum_numbers([1, -1]), 0)

    def test_sum_returns_None_if_null(self):
        self.assertEqual(self.object.sum_numbers([]), None)


    def test_word_count_returns_empty_dict_for_empty_string(self):
        self.assertEqual(self.object.count_letters(""), {})

    def test_word_count_returns_count_for_1_letter(self):
        self.assertEqual(self.object.count_letters("a"), {"a": 1})
        self.assertEqual(self.object.count_letters("b"), {"b": 1})

    def test_word_count_returns_count_for_2_letters(self):
        self.assertEqual(self.object.count_letters("ab"), {"a": 1, "b": 1})

    def test_word_count_returns_count_for_2_same_letters(self):
        self.assertEqual(self.object.count_letters("aa"), {"a": 2})

    def test_word_count_returns_count_for_simple_string(self):
        self.assertEqual(self.object.count_letters("habba"), {"a": 2, "b": 2, "h": 1})


if __name__ == "__main__":
    unittest.main()