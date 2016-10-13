/* jshint node: true */
'use strict';

module.exports = {
  name: 'input-with-floating-label',
  included: function(app) {
    this._super.included.apply(this, arguments);
    app.import('app/styles/input-with-floating-label.css');
  }
};
