import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../task.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe({
      next: tasks => this.tasks = tasks,
      error: () => this.router.navigate(['/login'])
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
