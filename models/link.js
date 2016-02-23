/*global Backbone */
var app = app || {};
(function() {
  "use strict";
  var Link = Backbone.Model.extend({
    create: function(source_id, target_id) {
      var cell = new joint.shapes.workflow.Link({
        source: {
          id: app.workflow.getDrawnTask(source_id).id
        },
        target: {
          id: app.workflow.getDrawnTask(target_id).id
        }
      });
      graph.addCell(cell);
      return cell;
    }
  });
  app.link = new Link();
})();
