export{}
class Doctor {
  constructor(public name: string,private doctorID: number,private specialty: string) {}
  showInfo() : void {
    console.log(`${this.doctorID},${this.specialty}`);

  }
}
class PatientId {
  constructor(private PatientID: number,public name: number, public age: number   ) {}

  showInfo(): void {
    console.log(`${this.PatientID} , ${this.name} , ${this.age}`);

  }
  examine(patient: Patient): void {
    console.log(`Doctor: ${this.name}`);
    console.log(`Patient: ${patient.name}`);
}

  }
const ();
const (); 