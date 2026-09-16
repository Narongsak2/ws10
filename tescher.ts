export{}
class Student {
  constructor(private name: string, private major: string){}

  getStudentinfo() {
    return `Student Name: ${this.name} Major: ${this.major}`;
  }
}

class Teacher {
  constructor(private name: string, private faculty: string){}

  getTeacherinfo() {
    return `Teacher Name: ${this.name} Faculty: ${this.faculty}`;
  }

  teach(student: Student) {
    console.log(`Teacher: ${this.name} สอน Student: ${student.getStudentinfo()}`);
  }
}

const s1 = new Student("วันเพ็ญ", "Computer Science");
const s2 = new Student("วัน", "Computer Science");
const t1 = new Teacher("เพ็ญ", "Computer Science");

t1.teach(s1);
t1.teach(s2);