export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'BACKLOG' | 'BLOCKED' | 'IN_PROGRESS' | 'COMPLETED';
  creationTime: string;
  startTime: string | null;
  lastUpdate: string | null;
  createdBy: string;
  assignedTo: string;
}