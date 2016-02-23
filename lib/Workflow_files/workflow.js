var app = app || {};
(function() {
  "use strict";
  var Workflow = Backbone.Model.extend({
    defaults: {
      drawnTasks: []
    },
    setDrawnTask: function(drawnTask) {
      var dts = this.get('drawnTasks');
      dts.push(drawnTask);
      this.set({
        drawnTasks: dts
      })
    }
  });
  app.workflow = new Workflow();
})();
