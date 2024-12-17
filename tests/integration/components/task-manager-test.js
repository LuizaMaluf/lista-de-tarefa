import { module, test } from 'qunit';
import { setupRenderingTest } from 'task-manager/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | task-manager', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TaskManager />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <TaskManager>
        template block text
      </TaskManager>
    `);

    assert.dom().hasText('template block text');
  });
});
