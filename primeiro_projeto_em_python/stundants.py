studants = ["Marcos 10\n", "Felipe 4\n", "José 6\n", "Ana 10\n", "Maria 9\n", "Miguel 5\n"]

recovery_students = []
with open(studants) as grades_file:
    for line in grades_file:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recovery_students.append(student_grade[0] + "\n")


with open("recovery_students.txt", mode="w") as recu_students_file:
    print(recovery_students)
    recu_students_file.writelines(recovery_students)