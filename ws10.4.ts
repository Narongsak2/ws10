class Patient {
  constructor(private patientId: number, private name: string, private age: number) {}

  getPatientId(): number { return this.patientId; }
  getName(): string { return this.name; }
  getAge(): number { return this.age; }

  showInfo(): string {
    return `Patient ID: ${this.patientId}, Name: ${this.name}, Age: ${this.age}`;
  }
}

class Doctor {
  constructor(private doctorId: number, private name: string, private specialty: string) {}

  diagnose(pt: Patient, dis: string): void {
    console.log(`Doctor: ${this.name} has diagnosed ${pt.showInfo()} with ${dis}.`);
  }

  prescribeMedicine(pt: Patient, med: string): void {
    console.log(`Doctor: ${this.name} has prescribed ${med} to ${pt.showInfo()}.`);
  }

  calculateTreatmentCost(pt: Patient, fee: number, medFee: number): void {
    console.log(`Doctor: ${this.name} has calculated the treatment cost for ${pt.showInfo()}.`);
    console.log(`Total cost: ${fee + medFee}`);
  }
}

const doctorJohn = new Doctor(1, "Dr. John", "Cardiology");
const doctorSmith = new Doctor(2, "Dr. Smith", "Neurology");
const alice = new Patient(101, "Alice", 30);
const bob = new Patient(102, "Bob", 25);

doctorJohn.diagnose(alice, "หัวใจ");
doctorSmith.diagnose(bob, "ปวดศีรษะ");
doctorJohn.prescribeMedicine(alice, "ยาลดความดัน");
doctorSmith.prescribeMedicine(bob, "ยาคลายเครียด");
doctorJohn.calculateTreatmentCost(alice, 500, 200);
doctorSmith.calculateTreatmentCost(bob, 300, 150);