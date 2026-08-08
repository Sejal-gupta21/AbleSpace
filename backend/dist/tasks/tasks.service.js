"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
let TasksService = class TasksService {
    constructor() {
        this.tasks = [
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
    }
    getAll() {
        return this.tasks;
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
//# sourceMappingURL=tasks.service.js.map