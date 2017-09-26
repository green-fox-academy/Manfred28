class Person(object):
    def __init__(self, name="Jane Doe", age=30, gender="female"):
        self.name = name
        self.age = age
        self.gender = gender

    def introduce(self):
        print("Hi, I'm {}, a {} year old {}.".format(self.name, self.age, self.gender))

    def get_goal(self):
        print("My goal is: Live for the moment!")

class Student(Person):
    def __init__(self, name="Jane Doe", age=30, gender="female", previous_organization="The School of Life"):
        super().__init__(name, age, gender)
        self.previous_organization = previous_organization
        self.skipped_days = 0
    
    def introduce(self):
        params = [self.name, self.age, self.gender, self.previous_organization, self.skipped_days]
        print("Hi, I'm {}, a {} year old {} from {} who skipped {} days from the course already.".format(*params))        

    def skip_days(self, number_of_days):
        self.skipped_days += number_of_days


ayy = Student("hallo")
ayy.introduce()