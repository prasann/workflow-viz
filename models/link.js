/*global Backbone */
var app = app || {};
(function() {
  "use strict";
  app.LinkModel = Backbone.Model.extend({
    draw: function(source, target) {
      var cell = new joint.shapes.workflow.Link({
        source: {
          id: source.id
        },
        target: {
          id: target.id
        }
      });
      app.graph.addCell(cell);
      return cell;
    }
  });
  app.link = new app.LinkModel();
})();
