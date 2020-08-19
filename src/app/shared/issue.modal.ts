export class IssueClass {
  constructor(
    public title: string,
    public issueType: string,
    public issuePriority: string,
    public issueStatus: string,
    public description: string,
    public reporterid: number,
    public assignees: string,
    public projectid: number
  ) {}
  // id: number;
  // title: string;
  // issueType: string;
  // issueStatus: string;
  // issuePriority: string;
  // description: string;
  // estimate: number;
  // timeSpent: number;
  // timeRemaining: number;
  // createdAt: Date;
  // updatedAt: Date;
  // reporterid: number;
  // projectid: number;
  // assignees: string;
}
