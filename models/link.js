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
      cell.label(0, { attrs: { text: { text: this.get('lead_time') } } })
      app.graph.addCell(cell);
      return cell;
    }
  });
})();
