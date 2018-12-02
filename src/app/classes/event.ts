export class Event {
  constructor(title: string, time: Date, location: string, description: string) {
    this.title = title;
    this.time = time;
    this.location = location;
    this.description = description;
  }
  title: string;
  time: Date;
  location: string;
  description: string;
}
