var app = app || {};
(function() {
  "use strict";
  var Workflow = Backbone.Model.extend({
    defaults: {
      drawnTasks: []
    },
    draw: function() {
      var dbTasks = this.get('dbTasks');
      var dbLinks = this.get('dbLinks');
      //Compute X, Y
      dbTasks.map(function(task) {
        task.draw();
      });
      dbLinks.each(function(link) {
        var source_task = dbTasks.findWhere({
          task_id: link.get('source')
        });
        var target_task = dbTasks.findWhere({
          task_id: link.get('target')
        });
        link.draw(source_task.get('drawnTask'), target_task.get('drawnTask'));
      });
    }
  });
  app.workflow = new Workflow();
})();
