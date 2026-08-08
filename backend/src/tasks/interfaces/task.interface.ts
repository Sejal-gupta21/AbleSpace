export type TaskStatus = 'todo' | 'doing' | 'completed';
export type TaskPriority = 'High' | 'Medium' | 'Low';

export interface Task {
  id: number;
  title: string;
  priority: TaskPriority;
  assignee: string;
  dueDate: string;
  status: TaskStatus;
  labels?: string[];
}
