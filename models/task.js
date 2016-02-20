"use strict";
var TaskModel = Backbone.Model.extend({
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
    return cell;
  }
});
var TaskCollection = Backbone.Collection.extend({
  model: TaskModel
});
