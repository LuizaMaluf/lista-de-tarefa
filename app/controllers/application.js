import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked tasks = [];  // Lista de tarefas

  taskTitle = ''; // Título da tarefa a ser adicionada

  // Atualiza o título da tarefa conforme o usuário digita
  @action
  updateTaskTitle(event) {
    this.taskTitle = event.target.value;
  }

  // Adiciona uma nova tarefa à lista
  @action
  addTask() {
    if (this.taskTitle.trim() !== '') {
      this.tasks = [...this.tasks, { title: this.taskTitle, completed: false }];

      this.taskTitle = '';
    }
  }

  // Alterna o estado de conclusão da tarefa
  @action
  toggleTaskCompletion(index) {
    const updatedTasks = [...this.tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    this.tasks = updatedTasks;
  }

}
