import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TaskListComponent extends Component {
  @action
  toggleTaskCompletion(index) {
    this.args.toggleTaskCompletion(index);
    console.log("foi")
  }
}
