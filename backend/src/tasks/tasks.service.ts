import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getAll() {
    return [{ id: 1, title: 'Design Homepage', status: 'todo' }];
  }
}
