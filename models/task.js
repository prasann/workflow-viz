/*global Backbone */
var app = app || {};

(function() {
  "use strict";
  app.TaskModel = Backbone.Model.extend({
    draw: function() {
      var cell = new joint.shapes.workflow.Task({
        position: {
          x: this.get('x'),
          y: this.get('y')
        },
        attrs: {
          '.name': {
            text: this.get('name')
          }
        }
      });
      app.graph.addCell(cell);
      app.workflow.setDrawnTask(cell);
      return cell;
    }
  });
  app.task = new app.TaskModel();
})();
