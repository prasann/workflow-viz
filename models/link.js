/*global Backbone */
var app = app || {};
(function() {
  "use strict";
  var Link = Backbone.Model.extend({
    create: function(source, target) {
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
  app.link = new Link();
})();
