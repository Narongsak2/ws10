export{}
class CPU {
  constructor(private brand: string, private cores: number) {}

  process(): void {
    console.log(`CPU ${this.brand},${this.cores} cores `);
  }

  showInfo(): void {
    console.log(`CPU- ${this.brand},${this.cores} cores`);
  }
}

class RAM {
  constructor(private capacity: number) {}

  load(): void {
    console.log(`RAM ${this.capacity} GB`);
  }

  showInfo(): void {
    console.log(`RAM - ${this.capacity} GB`);
  }
}

class Storage {
  constructor(private capacity: number, private type: string) {}

  readData(): void {
    console.log(`Storage ${this.type},${this.capacity} GB`);
  }

  showInfo(): void {
    console.log(`Storage Info: Type - ${this.type}, Capacity - ${this.capacity} GB`);
  }
}

class Computer {
  private cpu: CPU;
  private ram: RAM;
  private storage: Storage;

  constructor(
    cpuBrand: string,
    cpuCores: number,
    ramCapacity: number,
    storageCapacity: number,
    storageType: string
  ) {
    this.cpu = new CPU(cpuBrand, cpuCores);
    this.ram = new RAM(ramCapacity);
    this.storage = new Storage(storageCapacity, storageType);
  }

  boot(): void {
    this.cpu.process();
    this.ram.load();
    this.storage.readData();
    console.log(`Computer กำลังโหลดข้อมูล`);
  }

  showComputerInfo(): void {
    this.cpu.showInfo();
    this.ram.showInfo();
    this.storage.showInfo();
  }
}
const computer1 = new Computer("Intel", 8, 16, 512, "SSD");
computer1.boot();
computer1.showComputerInfo();