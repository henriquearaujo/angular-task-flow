import { describe, it, expect, beforeEach } from 'vitest';
import { TaskService } from './task.service';
import { Task } from '../models/task.model';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    service = new TaskService();

    // limpa o localStorage antes de cada teste
    localStorage.clear();
  });

  it('deve iniciar vazio', () => {
    const tasks = service.getAll();
    expect(tasks.length).toBe(0);
  });

  it('deve adicionar uma tarefa', () => {
    const task: Task = {
      id: '1',
      title: 'Teste',
      description: '',
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    service.add(task);

    const tasks = service.getAll();
    expect(tasks.length).toBe(1);
    expect(tasks[0].title).toBe('Teste');
  });

  it('deve remover uma tarefa', () => {
    const task: Task = {
      id: '1',
      title: 'Teste',
      description: '',
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    service.add(task);
    service.remove('1');

    const tasks = service.getAll();
    expect(tasks.length).toBe(0);
  });

  it('deve alternar status da tarefa', () => {
    const task: Task = {
      id: '1',
      title: 'Teste',
      description: '',
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    service.add(task);
    service.toggleStatus('1');

    const tasks = service.getAll();
    expect(tasks[0].status).toBe('completed');
  });

  it('deve atualizar uma tarefa', () => {
    const task: Task = {
      id: '1',
      title: 'Teste',
      description: '',
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    service.add(task);

    const updatedTask: Task = {
      ...task,
      title: 'Atualizado',
    };

    service.update(updatedTask);

    const tasks = service.getAll();
    expect(tasks[0].title).toBe('Atualizado');
  });
});