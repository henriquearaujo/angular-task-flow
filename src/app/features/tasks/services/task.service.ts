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

  getAll(): Task[] {
    return this.getTasks();
  }

  add(task: Task): void {
    const tasks = this.getTasks();
    tasks.push(task);
    this.saveTasks(tasks);
  }

  toggleStatus(id: string): void {
  const tasks: Task[] = this.getTasks().map((task) => {
    if (task.id !== id) return task;

    return {
      ...task,
      status: task.status === 'pending'
        ? ('completed' as TaskStatus)
        : ('pending' as TaskStatus),
    };
  });

  this.saveTasks(tasks);
}

  remove(id: string): void {
    const tasks = this.getTasks().filter(task => task.id !== id);
    this.saveTasks(tasks);
  }
}