export type TaskStatus = 'todo' | 'doing' | 'completed';

export interface Task {
  id: string;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  assignee: string;
  dueDate: string;
  status: TaskStatus;
}
