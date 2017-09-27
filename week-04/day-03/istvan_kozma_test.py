import unittest
from istvan_kozma_work import MyObject

class MyObjectTests(unittest.TestCase):
    def setUp(self):
        self.object = MyObject()
    
    def test_apple_returns_apple_string(self):
        self.assertEquals(self.object.get_apple(), "appl")


if __name__ == "__main__":
    unittest.main()