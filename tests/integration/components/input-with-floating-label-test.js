import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('input-with-floating-label', 'Integration | Component | input with floating label', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{input-with-floating-label}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#input-with-floating-label}}
      template block text
    {{/input-with-floating-label}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
