export class Task {
  id?: number;
  title: string;
  status: string;
  constructor(taskData) {
    if (taskData.id) this.id = taskData.id;
    this.title = taskData.title;
    this.status = taskData.status;
  }
}
