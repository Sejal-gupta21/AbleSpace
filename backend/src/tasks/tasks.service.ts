import { Injectable } from '@nestjs/common';
import type { Task } from './interfaces/task.interface';
import type { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Design Homepage',
      priority: 'High',
      assignee: 'Ananya',
      dueDate: '12 Sep 2026',
      status: 'todo',
      labels: ['Design', 'Research'],
    },
    {
      id: 2,
      title: 'Develop Login Feature',
      priority: 'Low',
      assignee: 'CN',
      dueDate: '15 Sep 2026',
      status: 'doing',
      labels: ['Development'],
    },
    {
      id: 3,
      title: 'Test Payment Gateway',
      priority: 'Medium',
      assignee: 'QA Team',
      dueDate: '18 Sep 2026',
      status: 'completed',
      labels: ['Testing'],
    },
  ];

  getAll(): Task[] {
    return this.tasks;
  }

  create(createTaskDto: CreateTaskDto): Task {
    const newTask: Task = {
      id: this.tasks.length + 1,
      ...createTaskDto,
    };

    this.tasks.push(newTask);
    return newTask;
  }
}
