# Teacher Student

# Create Student and Teacher classes
# Student
# learn()
# question(teacher) -> calls the teachers answer method
# Teacher
# teach(student) -> calls the students learn method
# answer()

class Student(object):
    def learn(self):
        pass

    def question(self, teacher):
        teacher.answer()


class Teacher(object):
    def answer(self):
        pass
    
    def teach(self, student):
        student.learn()

