export interface Issue {
  id: number;
  title: string;
  issueType: string;
  issueStatus: string;
  issuePriority: string;
  description: string;
  estimate: number;
  timeSpent: number;
  timeRemaining: number;
  createdAt: Date;
  updatedAt: Date;
  reporterid: number;
  projectid: number;
  assignees: string;
}
