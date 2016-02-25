/*global Backbone */
var app = app || {};

(function(){
  "use strict";
  var Tasks = Backbone.Collection.extend({
    model: app.TaskModel,
    url: '/data/tasks.json',
    initialize: function(){
      this.deferred = this.fetch();
    }
  });

  app.tasks = new Tasks();
})();
