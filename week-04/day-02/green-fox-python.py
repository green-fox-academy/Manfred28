class Person(object):
    def __init__(self, name="Jane Doe", age=30, gender="female"):
        self.name = name
        self.age = age
        self.gender = gender

    def introduce(self):
        params = [self.name, self.age, self.gender]
        print("Hi, I'm {}, a {} year old {}.".format(*params))

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


class Mentor(Person):
    def __init__(self, name="Jane Doe", age=30, gender="female", level="intermediate"):
        super().__init__(name, age, gender)
        self.level = level

    def get_goal(self):
        print("Educate brilliant junior software developers.")

    def introduce(self):
        params = [self.name, self.age, self.gender, self.level]
        print("Hi, I'm {}, a {} year old {} {} mentor.".format(*params))


class Sponsor(Person):
    def __init__(self, name="Jane Doe", age=30, gender="female", company="Google"):
        super().__init__(name, age, gender)
        self.company = company
        self.hired_students = 0

    def introduce(self):
        params = [self.name, self.age, self.gender, self.company, self.hired_students]
        print("Hi, I'm {}, a {} year old {} who represents {} and hired {} students so far".format(*params))

    def hire(self):
        self.hired_students += 1

    def get_goal(self):
        print("Hire brilliant junior software developers.")


class PallidaClass():
    def __init__(self, class_name):
        self.class_name = class_name
        self.students = []
        self.mentors = []

    def add_student(self, Student):
        self.students.append(Student)

    def add_mentor(self, Mentor):
        self.mentors.append(Mentor)

    def info(self):
        params = [self.class_name, len(self.students), len(self.mentors)]
        print("Pallida {} class has {} students and {} mentors.".format(*params))
