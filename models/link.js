/*global Backbone */
var app = app || {};
(function() {
  "use strict";
  app.LinkModel = Backbone.Model.extend({
    toJSON: function(opts){
      return _.omit(this.attributes, ['drawnLink'])
    },
    draw: function(source, target) {
      var cell = new joint.shapes.workflow.Link({
        source: {
          id: source.id
        },
        target: {
          id: target.id
        },
        dbLink: this
      });
      cell.set('vertices', this.get('vertices'));
      cell.label(0, { attrs: { text: { text: this.get('lead_time') } } })
      this.set('drawnLink', cell);
      app.graph.addCell(cell);
      return cell;
    }
  });
})();
