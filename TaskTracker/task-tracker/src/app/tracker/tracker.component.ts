import { computeMsgId } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Task } from '../task';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css'],
})
export class TrackerComponent implements OnInit {
  taskList: Task[] = new Array();
  columnNames: string[] = ['id', 'name', 'info', 'deadline'];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  addNewTask(taskForm: NgForm) {
    let newTask: Task = {
      id: taskForm.value.id,
      name: taskForm.value.name,
      info: taskForm.value.info,
      deadline: taskForm.value.deadline,
    };
    this.data.storeTask(newTask);
    // console.log(newTask);
  }

  getTasks() {
    this.data.getTasks().subscribe(
      (data) => {
        this.taskList = data;
      },
      (error) => console.log(error)
    );
    // console.log(this.taskList);
  }

  deleteTask(task: Task): void {
    this.data.removeTask(task);
  }
}
