import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  @Input() tasks: Task[] = [];

  @Output() toggle = new EventEmitter<string>();
  @Output() edit = new EventEmitter<Task>();
  @Output() remove = new EventEmitter<string>();
}