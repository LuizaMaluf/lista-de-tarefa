// app/models/task.js
import Model, { attr } from '@ember-data/model';

export default class TaskModel extends Model {
  @attr('string') title;
  @attr('boolean') completed;
}