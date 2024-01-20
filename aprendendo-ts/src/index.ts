class Tv {
 brand: string;
 size: number;
 resolution: string;
 connections: string[];
 connectedTo: boolean = false;

  constructor(b: string, s: number, r: string, c: string[]) {
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
  }

  turnOn() {
    console.log(`${this.brand}`);
    console.log(`${this.size}`);
    console.log(`${this.resolution}`);
    console.log(`${this.connections}`);
  }

};

const newTv = new Tv('Samsung', 55, '4k', ['HDMI', 'USB', 'Bluetooth']);

newTv.turnOn();

