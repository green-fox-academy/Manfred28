import unittest
from istvan_kozma_work import MyObject

class MyObjectTests(unittest.TestCase):
    def setUp(self):
        self.object = MyObject()
    
    def test_apple_returns_apple_string(self):
        self.assertEqual(self.object.get_apple(), "appl")


    def test_sum_returns_None_if_empty_list(self):
        self.assertRaises(TypeError, self.object.sum_numbers)

    def test_sum_returns_correct_value_with_one_number(self):
        self.assertEqual(self.object.sum_numbers([1]), 1)

    def test_sum_returns_correct_value_with_two_numbers(self):
        self.assertEqual(self.object.sum_numbers([1, 1]), 2)
        self.assertEqual(self.object.sum_numbers([10.1, 1.5]), 11.6)
        self.assertEqual(self.object.sum_numbers([1, -1]), 0)
        self.assertNotEqual(self.object.sum_numbers([1, 2]), 4)


    def test_palindrome_returns_none_for_empty_string(self):
        self.assertEqual(self.object.palindrome_checker(""), None)

    def test_palindrome_returns_true_for_single_letter(self):
        self.assertTrue(self.object.palindrome_checker("a"))

    def test_palindrome_returns_correct_result_for_two_letters(self):
        self.assertTrue(self.object.palindrome_checker("aa"))
        self.assertFalse(self.object.palindrome_checker("cb"))

    def test_palindrome_returns_true_correct_result_for_palindrome(self):
        self.assertTrue(self.object.palindrome_checker("aba"))
        self.assertFalse(self.object.palindrome_checker("abab"))


    def test_anagram_return_true_for_empty_string(self):
        self.assertTrue(self.object.anagram_checker("", ""))        

    def test_anagram_correct_result_for_single_word(self):
        self.assertTrue(self.object.anagram_checker("asd", "dsa"))        
        self.assertFalse(self.object.anagram_checker("add", "dsa"))        

    def test_anagram_correct_result_for_string_with_equal_spaces(self):
        self.assertTrue(self.object.anagram_checker("asd ", "a sd"))      


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


    def test_fibonacci_correct_result_for_0(self):
        self.assertEqual(self.object.fibonacci(0), None)

    def test_fibonacci_correct_result_for_1(self):
        self.assertEqual(self.object.fibonacci(1), 1)

    def test_fibonacci_correct_result_for_2(self):
        self.assertEqual(self.object.fibonacci(2), 1)

    def test_fibonacci_correct_result_for_4(self):
        self.assertEqual(self.object.fibonacci(4), 3)


if __name__ == "__main__":
    unittest.main()