import { Component, computed, inject, signal } from '@angular/core';
import { Task } from './features/tasks/models/task.model';
import { TaskService } from './features/tasks/services/task.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly taskService = inject(TaskService);

  tasks = signal<Task[]>(this.taskService.getAll());

  totalTasks = computed(() => this.tasks().length);

  completedTasks = computed(
    () => this.tasks().filter((task) => task.status === 'completed').length,
  );

  pendingTasks = computed(
    () => this.tasks().filter((task) => task.status === 'pending').length,
  );

  addTask(): void {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: 'Nova Tarefa',
      description: 'Pratique componentes, serviços e gerenciamento de estado.',
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    this.taskService.add(newTask);
    this.refreshTasks();
  }

  toggleTaskStatus(id: string): void {
    this.taskService.toggleStatus(id);
    this.refreshTasks();
  }

  removeTask(id: string): void {
    this.taskService.remove(id);
    this.refreshTasks();
  }

  private refreshTasks(): void {
    this.tasks.set(this.taskService.getAll());
  }
}