import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  taskId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: [''],
      estatus: ['pendiente']
    });
  }

  ngOnInit(): void {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.isEdit = !!this.taskId;

    if (this.isEdit) {
      this.taskService.getTasks().subscribe(tasks => {
        const task = tasks.find(t => t.id === this.taskId);
        if (task) this.form.patchValue(task);
      });
    }
  }

  onSubmit() {
    if (this.isEdit && this.taskId) {
      this.taskService.updateTask(this.taskId, this.form.value).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    } else {
      this.taskService.createTask(this.form.value).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    }
  }
}
