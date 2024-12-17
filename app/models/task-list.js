// app/models/task-list.js
import Model, { hasMany } from '@ember-data/model';
import { tracked } from '@glimmer/tracking';

export default class TaskListModel extends Model {
  @hasMany('task') tasks;
}
