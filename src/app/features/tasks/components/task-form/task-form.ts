import { Component, EventEmitter, Input, OnChanges, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm implements OnChanges {
  @Input() taskToEdit: Task | null = null;

  @Output() create = new EventEmitter<Task>();
  @Output() update = new EventEmitter<Task>();
  @Output() cancel = new EventEmitter<void>();

  @Input() isLoading = false;

  title = signal('');
  description = signal('');

  ngOnChanges(): void {
    if (!this.taskToEdit) return;

    this.title.set(this.taskToEdit.title);
    this.description.set(this.taskToEdit.description ?? '');
  }

  submit(): void {
    const value = this.title().trim();
    if (!value) return;

    if (this.taskToEdit) {
      this.update.emit({
        ...this.taskToEdit,
        title: value,
        description: this.description(),
      });
    } else {
      this.create.emit({
        id: crypto.randomUUID(),
        title: value,
        description: this.description(),
        status: 'pending',
        createdAt: new Date().toISOString(),
      });
    }

    this.clearForm();
  }

  clearForm(): void {
    this.title.set('');
    this.description.set('');
  }

  cancelEdit(): void {
    this.clearForm();
    this.cancel.emit();
  }
}