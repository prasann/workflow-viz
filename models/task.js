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
            text: app.wrapText(this.get('name'))
          },
          '.reviewer_role': {
            text: app.wrapText(this.get('reviewer_role'))
          }
        }
      });
      app.graph.addCell(cell);
      this.set('drawnTask', cell);
      return cell;
    }
  });
})();
