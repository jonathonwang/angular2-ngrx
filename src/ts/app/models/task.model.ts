export class Task {
  id?: number;
  title: string;
  status: string;
  timeEstimate: number;
  timeLogged: number;
  constructor(taskData) {
    if (taskData.id) this.id = taskData.id;
    this.title = taskData.title;
    this.status = taskData.status;
    this.timeEstimate = taskData.timeEstimate;
    this.timeLogged = taskData.timeSpent;
  }
}
