/*global Backbone */
var app = app || {};
(function() {
  "use strict";
  var Link = Backbone.Model.extend({
    create: function($source, $target){
      debugger;
      var cell = new joint.shapes.workflow.Link({
        source: {
          id: $source.id
        },
        target: {
          id: $target.id
        }
      });
      graph.addCell(cell);
      return cell;
    }
  });
  app.link = new Link();
})();
