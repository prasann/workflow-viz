var app = app || {};
(function() {
  "use strict";
  var Workflow = Backbone.Model.extend({
    defaults: {
      drawnTasks: []
    },
    initialize: function(){
      $.when(app.tasks.deferred, app.links.deferred).then(this.draw);
    },
    draw: function() {
      app.tasks.each(function(task) {
        task.draw();
      });
      app.links.each(function(link) {
        var source_task = app.tasks.findWhere({
          task_id: link.get('source')
        });
        var target_task = app.tasks.findWhere({
          task_id: link.get('target')
        });
        link.draw(source_task.get('drawnTask'), target_task.get('drawnTask'));
      });
    }
  });
  app.workflow = new Workflow();
})();
