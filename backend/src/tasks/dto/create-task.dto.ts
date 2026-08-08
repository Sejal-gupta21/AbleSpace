import { TaskPriority, TaskStatus } from '../interfaces/task.interface';

export class CreateTaskDto {
  title!: string;
  priority!: TaskPriority;
  assignee!: string;
  dueDate!: string;
  status!: TaskStatus;
  labels?: string[];
}
