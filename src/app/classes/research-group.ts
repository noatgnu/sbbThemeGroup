export class ResearchGroup {
  constructor(leader: string, theme: string[], description: string, title: string) {
    this.leader = leader;
    this.theme = theme;
    this.description = description;
    this.title = title;
  }
  leader: string;
  theme: string[];
  description: string;
  title: string;
}
