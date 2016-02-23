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
      graph.addCell(cell);
      app.workflow.setDrawnTask(cell);
      console.log(cell.id);
      console.log(app.workflow.get('drawnTasks'));
      return cell;
    }
  });
  app.task = new app.TaskModel();
})();
