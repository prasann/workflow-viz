/*global Backbone */
var app = app || {};

(function() {
  "use strict";

  app.TaskModel = Backbone.Model.extend({
    initialize: function() {
      _.bindAll(this, 'update');
      this.on('change', this.update);
    },
    toJSON: function(opts) {
      return _.omit(this.attributes, ['drawnTask'])
    },
    save: function() {

    },
    draw: function() {
      var cell = new joint.shapes.workflow.Task({
        position: {
          x: this.get('position').x,
          y: this.get('position').y
        },
        attrs: {
          '.href_link': {
            'xlink:href': 'http://jointjs.com',
            'xlink:show': 'new',
            text: 'Link123',
            cursor: 'pointer'
          },
          '.name': {
            text: app.wrapText(this.get('name'))
          },
          '.reviewer_role': {
            text: app.wrapText(this.get('reviewer_role'))
          },
          '.dates': {
            text: app.wrapText('20-FEB')
          }
        },
        dbTask: this
      });
      app.graph.addCell(cell);
      this.set('drawnTask', cell);
      return cell;
    },
    update: function() {
      var drawnTask = this.get('drawnTask');
      drawnTask.attr('.name/text', app.wrapText(this.get('name')));
      drawnTask.attr('.dates/text', app.wrapText(this.get('dates')));
    }
  });
})();
