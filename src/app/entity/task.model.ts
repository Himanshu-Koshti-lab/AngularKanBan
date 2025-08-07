export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  creationTime: string;
  startTime: string | null;
  lastUpdate: string | null;
  createdBy: string;
  assignedTo: string;
}