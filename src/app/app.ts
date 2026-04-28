import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';

import { Task } from './features/tasks/models/task.model';
import { TaskService } from './features/tasks/services/task.service';
import { TaskForm } from './features/tasks/components/task-form/task-form';
import { TaskList } from './features/tasks/components/task-list/task-list';
import { Toast } from './shared/components/toast/toast';

type TaskFilter = 'all' | 'pending' | 'completed';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskForm, TaskList, Toast],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly taskService = inject(TaskService);

  tasks = signal<Task[]>([]);
  isLoading = signal(false);
  editingTask = signal<Task | null>(null);
  selectedFilter = signal<TaskFilter>('all');

  toastMessage = signal('');
  showToast = signal(false);

  totalTasks = computed(() => this.tasks().length);

  completedTasks = computed(
    () => this.tasks().filter((task) => task.status === 'completed').length
  );

  pendingTasks = computed(
    () => this.tasks().filter((task) => task.status === 'pending').length
  );

  filteredTasks = computed(() => {
    const filter = this.selectedFilter();

    if (filter === 'pending') {
      return this.tasks().filter((task) => task.status === 'pending');
    }

    if (filter === 'completed') {
      return this.tasks().filter((task) => task.status === 'completed');
    }

    return this.tasks();
  });

  async ngOnInit(): Promise<void> {
    await this.runWithLoading(async () => {
      await this.loadTasks();
    });
  }

  private async loadTasks(): Promise<void> {
    const tasks = await this.taskService.getAll();
    this.tasks.set(tasks);
  }

  private async runWithLoading(action: () => Promise<void>): Promise<void> {
    this.isLoading.set(true);

    try {
      await action();
    } finally {
      this.isLoading.set(false);
    }
  }

  changeFilter(filter: TaskFilter): void {
    this.selectedFilter.set(filter);
  }

  startEditing(task: Task): void {
    this.editingTask.set(task);
  }

  cancelEditing(): void {
    this.editingTask.set(null);
  }

  async addTask(task: Task): Promise<void> {
    await this.runWithLoading(async () => {
      await this.taskService.add(task);
      await this.loadTasks();
    });

    this.triggerToast(`"${task.title}" criada com sucesso`);
  }

  async updateTask(task: Task): Promise<void> {
    await this.runWithLoading(async () => {
      await this.taskService.update(task);
      await this.loadTasks();
    });

    this.editingTask.set(null);
    this.triggerToast(`"${task.title}" atualizada com sucesso`);
  }

  async toggleTaskStatus(id: string): Promise<void> {
    const task = this.tasks().find((item) => item.id === id);
    const nextStatus = task?.status === 'pending' ? 'completed' : 'pending';

    this.tasks.update((tasks) =>
      tasks.map((taskItem) =>
        taskItem.id === id
          ? {
              ...taskItem,
              status: taskItem.status === 'pending' ? 'completed' : 'pending',
            }
          : taskItem
      )
    );

    await this.taskService.toggleStatus(id);

    this.triggerToast(
      `"${task?.title ?? 'Tarefa'}" ${
        nextStatus === 'completed' ? 'marcada como concluída' : 'reaberta'
      }`
    );
  }

  async removeTask(id: string): Promise<void> {
    const task = this.tasks().find((item) => item.id === id);

    await this.runWithLoading(async () => {
      await this.taskService.remove(id);
      await this.loadTasks();
    });

    this.triggerToast(`"${task?.title ?? 'Tarefa'}" removida com sucesso`);
  }

  private triggerToast(message: string): void {
    this.toastMessage.set(message);
    this.showToast.set(true);

    setTimeout(() => {
      this.showToast.set(false);
    }, 2000);
  }
}