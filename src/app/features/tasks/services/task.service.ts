import { Injectable } from '@angular/core';
import { Task, TaskStatus } from '../models/task.model';

const STORAGE_KEY = 'tasks';

@Injectable({
  providedIn: 'root',
})

export class TaskService {

  private getTasks(): Task[] {
    if (typeof window === 'undefined') return [];

    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];

    const parsed = JSON.parse(data);

    return parsed.map((task: any) => ({
      ...task,
      status: task.status === 'completed' ? 'completed' : 'pending',
    }));
  }

  private saveTasks(tasks: Task[]): void {
    if (typeof window === 'undefined') return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }

  private simulateApiDelay(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 600));
  }

  async getAll(): Promise<Task[]> {
    await this.simulateApiDelay();
    return this.getTasks();
  }

  async add(task: Task): Promise<void> {
    await this.simulateApiDelay();

    const tasks = this.getTasks();
    tasks.push(task);
    this.saveTasks(tasks);
  }

  async update(updatedTask: Task): Promise<void> {
    await this.simulateApiDelay();

    const tasks = this.getTasks().map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );

    this.saveTasks(tasks);
  }

  async toggleStatus(id: string): Promise<void> {
    await this.simulateApiDelay();

    const tasks: Task[] = this.getTasks().map((task) => {
      if (task.id !== id) return task;

      return {
        ...task,
        status: task.status === 'pending' ? 'completed' : 'pending',
      };
    });

    this.saveTasks(tasks);
  }

  async remove(id: string): Promise<void> {
    await this.simulateApiDelay();

    const tasks = this.getTasks().filter((task) => task.id !== id);
    this.saveTasks(tasks);
  }
}